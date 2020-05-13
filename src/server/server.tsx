/* eslint-disable */
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import express, { Request, Response } from "express";
import contextService from 'request-context';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from '@apollo/react-hooks';
import { getDataFromTree } from "@apollo/react-ssr";
import { createApolloClient } from "../apollo/apollo";
import App from "../client/App/App";

const app = express();
const port = process.env.PORT || 3000;
const BUILD_DIR = path.join(process.cwd(), './public');

app.use('/static', express.static(path.join(BUILD_DIR, 'static')));
app.use('/images', express.static(path.join(BUILD_DIR, 'images')));

app.use(contextService.middleware('request'));

app.get('*', async (req: Request, res: Response) => {
    const client = createApolloClient();
    const context = {};

    async function render() {
        const Root = (
            <ApolloProvider client={client}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </ApolloProvider>
        );

        await getDataFromTree(Root);
        return renderToString(Root);
    }

    const htmlContent = render();

    const apolloStateJSON = JSON.stringify(client.extract())
        .replace(/</g, '\\u003c');

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React</title>
            <link rel="stylesheet" href="/static/main.css">
        </head>
        <body>
            <div id="root">${htmlContent}</div>
            <script>
                window.__APOLLO_STATE__ = ${apolloStateJSON}
            </script>
            <script src="/static/main.js"></script>
        </body>
        </html>
    `;

    res.send(html);
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});