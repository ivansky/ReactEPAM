/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App/App.scss":
/*!*********************************!*\
  !*** ./src/client/App/App.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/App.tsx":
/*!********************************!*\
  !*** ./src/client/App/App.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var Search_1 = __importDefault(__webpack_require__(/*! ./components/Search/Search */ "./src/client/App/components/Search/Search.tsx"));
__webpack_require__(/*! ./App.scss */ "./src/client/App/App.scss");
var SearchResult_1 = __importDefault(__webpack_require__(/*! ./components/SearchResult/SearchResult */ "./src/client/App/components/SearchResult/SearchResult.tsx"));
var ShowMovieInfo_1 = __importDefault(__webpack_require__(/*! ./components/SearchResult/ShowMovieInfo */ "./src/client/App/components/SearchResult/ShowMovieInfo.tsx"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "connected-react-router");
var react_router_1 = __webpack_require__(/*! react-router */ "react-router");
var NotFound_1 = __importDefault(__webpack_require__(/*! ./components/NotFound */ "./src/client/App/components/NotFound.tsx"));
var Pending_1 = __importDefault(__webpack_require__(/*! ./components/Pending */ "./src/client/App/components/Pending.tsx"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSelectMovie = function (movie) {
            _this.setState({
                showCurrentMovie: true,
                currentMovie: movie
            });
        };
        _this.handleSelectSearch = function () {
            _this.setState({
                showCurrentMovie: false,
            });
        };
        _this.state = {
            showCurrentMovie: false,
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        var getResult = function () {
            if (_this.state.currentMovie) {
                return (react_1.default.createElement(react_router_1.Route, { path: "/films/" + _this.state.currentMovie.id },
                    react_1.default.createElement(ShowMovieInfo_1.default, { key: _this.state.currentMovie.id, id: _this.state.currentMovie.id, title: _this.state.currentMovie.title, genres: _this.state.currentMovie.genres, releaseDate: _this.state.currentMovie.releaseDate, imageURL: _this.state.currentMovie.imageURL, rating: _this.state.currentMovie.rating, description: _this.state.currentMovie.description, action: function () { return _this.handleSelectSearch(); }, runtime: _this.state.currentMovie.runtime }),
                    react_1.default.createElement(SearchResult_1.default, { movies: _this.props.fetchedMovies, action: function (movie) { return _this.handleSelectMovie(movie); } })));
            }
            else if (_this.props.fetchedMovies.length === 0) {
                if (_this.props.pending) {
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Search_1.default, { filterOptions: ['title', 'genres'] }),
                        react_1.default.createElement(Pending_1.default, null)));
                }
                else {
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Search_1.default, { filterOptions: ['title', 'genres'] }),
                        react_1.default.createElement(NotFound_1.default, null)));
                }
            }
            else {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Search_1.default, { filterOptions: ['title', 'genres'] }),
                    react_1.default.createElement(SearchResult_1.default, { movies: _this.props.fetchedMovies, action: function (movie) { return _this.handleSelectMovie(movie); } })));
            }
        };
        return (react_1.default.createElement("div", { className: 'App' },
            react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: this.props.history },
                react_1.default.createElement(react_router_1.Switch, null,
                    react_1.default.createElement(react_router_1.Route, { exact: true, path: "/" },
                        react_1.default.createElement(Search_1.default, { filterOptions: ['title', 'genres'] }),
                        react_1.default.createElement(NotFound_1.default, null)),
                    react_1.default.createElement(react_router_1.Route, { path: "/search/" }, getResult()),
                    react_1.default.createElement(react_router_1.Route, { path: "/films/" }, getResult()),
                    react_1.default.createElement(react_router_1.Route, { path: "*" },
                        react_1.default.createElement(Search_1.default, { filterOptions: ['title', 'genres'] }),
                        react_1.default.createElement(NotFound_1.default, null)))),
            react_1.default.createElement("div", { className: 'footer' },
                react_1.default.createElement("div", { className: 'footer-content' }, "Netflixroulette"))));
    };
    return App;
}(react_1.Component));
function mapStateToProps(state) {
    return {
        fetchedMovies: state.fetchMovies.movies,
        pending: state.fetchMovies.pending
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(App);


/***/ }),

/***/ "./src/client/App/ConfigureStore.ts":
/*!******************************************!*\
  !*** ./src/client/App/ConfigureStore.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "redux");
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
var history_1 = __webpack_require__(/*! history */ "history");
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "connected-react-router");
var redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "redux-thunk"));
var rootReducer_1 = __importDefault(__webpack_require__(/*! ./reducers/rootReducer */ "./src/client/App/reducers/rootReducer.ts"));
var is_browser_1 = __importDefault(__webpack_require__(/*! is-browser */ "is-browser"));
exports.history = is_browser_1.default ? history_1.createBrowserHistory() : history_1.createMemoryHistory();
var state = {};
if (typeof window !== 'undefined') {
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}
function configureStore() {
    return redux_1.createStore(rootReducer_1.default(exports.history), state, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default, connected_react_router_1.routerMiddleware(exports.history))));
}
exports.configureStore = configureStore;


/***/ }),

/***/ "./src/client/App/actions/fetchMoviesError.ts":
/*!****************************************************!*\
  !*** ./src/client/App/actions/fetchMoviesError.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../constants/Constants */ "./src/client/App/constants/Constants.ts");
exports.fetchMoviesError = function () { return ({
    type: Constants_1.ActionTypes.FETCH_MOVIES_ERROR,
    payload: true,
}); };


/***/ }),

/***/ "./src/client/App/actions/fetchMoviesPending.ts":
/*!******************************************************!*\
  !*** ./src/client/App/actions/fetchMoviesPending.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../constants/Constants */ "./src/client/App/constants/Constants.ts");
exports.fetchMoviesPending = function () { return ({
    type: Constants_1.ActionTypes.FETCH_MOVIES_PENDING,
}); };


/***/ }),

/***/ "./src/client/App/actions/fetchMoviesSuccess.ts":
/*!******************************************************!*\
  !*** ./src/client/App/actions/fetchMoviesSuccess.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../constants/Constants */ "./src/client/App/constants/Constants.ts");
exports.fetchMoviesSuccess = function (movies) { return ({
    type: Constants_1.ActionTypes.FETCH_MOVIES_SUCCESS,
    payload: movies
}); };


/***/ }),

/***/ "./src/client/App/actions/setSearchQuery.ts":
/*!**************************************************!*\
  !*** ./src/client/App/actions/setSearchQuery.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../constants/Constants */ "./src/client/App/constants/Constants.ts");
exports.setSearchInput = function (input) { return ({
    type: Constants_1.ActionTypes.SET_SEARCH_INPUT,
    payload: input
}); };
exports.setSearchFilter = function (filterOption) { return ({
    type: Constants_1.ActionTypes.SET_SEARCH_FILTER,
    payload: filterOption
}); };


/***/ }),

/***/ "./src/client/App/components/NotFound.scss":
/*!*************************************************!*\
  !*** ./src/client/App/components/NotFound.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/NotFound.tsx":
/*!************************************************!*\
  !*** ./src/client/App/components/NotFound.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./NotFound.scss */ "./src/client/App/components/NotFound.scss");
var NotFound = function () {
    return (react_1.default.createElement("div", { className: 'not-found' }, "No films found"));
};
exports.default = NotFound;


/***/ }),

/***/ "./src/client/App/components/Pending.tsx":
/*!***********************************************!*\
  !*** ./src/client/App/components/Pending.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./NotFound.scss */ "./src/client/App/components/NotFound.scss");
var Pending = function () {
    return (react_1.default.createElement("div", { className: 'not-found' }, "Please wait..."));
};
exports.default = Pending;


/***/ }),

/***/ "./src/client/App/components/Search/Search.scss":
/*!******************************************************!*\
  !*** ./src/client/App/components/Search/Search.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/Search/Search.tsx":
/*!*****************************************************!*\
  !*** ./src/client/App/components/Search/Search.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Button_1 = __importDefault(__webpack_require__(/*! ../common/Button */ "./src/client/App/components/common/Button.tsx"));
var Input_1 = __importDefault(__webpack_require__(/*! ../common/Input */ "./src/client/App/components/common/Input.tsx"));
var Filter_1 = __importDefault(__webpack_require__(/*! ./components/Filter */ "./src/client/App/components/Search/components/Filter.tsx"));
__webpack_require__(/*! ./Search.scss */ "./src/client/App/components/Search/Search.scss");
var redux_1 = __webpack_require__(/*! redux */ "redux");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var setSearchQuery_1 = __webpack_require__(/*! ../../actions/setSearchQuery */ "./src/client/App/actions/setSearchQuery.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var ConfigureStore_1 = __webpack_require__(/*! ../../ConfigureStore */ "./src/client/App/ConfigureStore.ts");
var getMovies_1 = __webpack_require__(/*! ../../thunkAction/getMovies */ "./src/client/App/thunkAction/getMovies.ts");
var Constants_1 = __webpack_require__(/*! ../../constants/Constants */ "./src/client/App/constants/Constants.ts");
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.handleButtonSubmit = function () {
            _this.handleSearch();
            localStorage.setItem(Constants_1.LocalStorageKeys.LAST_SEARCH, _this.state.inputValue);
            ConfigureStore_1.history.push("/search/" + _this.state.inputValue);
        };
        _this.handleInputChange = function (e) {
            var inputText = e.target.value;
            _this.setState({ inputValue: inputText });
        };
        _this.handleSearch = function () {
            var url = "https://reactjs-cdp.herokuapp.com/movies?search=" + _this.props.searchQuery.input + "&searchBy=" + _this.props.searchQuery.filterOption;
            _this.props.getMovies(url);
        };
        _this.handleInputSubmit = function (e) {
            if (e.key === 'Enter') {
                _this.handleSearch();
                localStorage.setItem(Constants_1.LocalStorageKeys.LAST_SEARCH, _this.state.inputValue);
                ConfigureStore_1.history.push("/search/" + _this.state.inputValue);
            }
        };
        _this.handleSwitchFilter = function (e) {
            _this.setState({ activeOption: e.target.value });
        };
        _this.state = {
            inputValue: '',
            filterOptions: props.filterOptions,
            activeOption: props.filterOptions[0]
        };
        return _this;
    }
    Search.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps === this.props) {
            this.props.setSearchInput(this.state.inputValue);
            this.props.setSearchFilter(this.state.activeOption);
        }
    };
    Search.prototype.componentDidMount = function () {
        var searchPathFragment = /search\/(.*)/.exec(ConfigureStore_1.history.location.pathname);
        if (searchPathFragment) {
            localStorage.setItem(Constants_1.LocalStorageKeys.LAST_SEARCH, searchPathFragment[1]);
            var url = "https://reactjs-cdp.herokuapp.com/movies?search=" + searchPathFragment[1] + "&searchBy=" + this.state.activeOption;
            this.props.getMovies(url);
            this.props.setSearchInput(searchPathFragment[1]);
            ConfigureStore_1.history.push("/search/" + searchPathFragment[1]);
        }
        else {
            var url = "https://reactjs-cdp.herokuapp.com/movies?search=" + localStorage.getItem(Constants_1.LocalStorageKeys.LAST_SEARCH) + "&searchBy=" + this.state.activeOption;
            this.props.getMovies(url);
            ConfigureStore_1.history.push("/search/" + localStorage.getItem(Constants_1.LocalStorageKeys.LAST_SEARCH));
        }
    };
    Search.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: 'search-container' },
            react_1.default.createElement("div", { className: 'search' },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: 'search-title' },
                    react_1.default.createElement("h1", null, "Netflixroulette")),
                react_1.default.createElement("h2", null, "Find your movie"),
                react_1.default.createElement(Input_1.default, { type: 'text', changeAction: this.handleInputChange, submitAction: this.handleInputSubmit }),
                react_1.default.createElement("div", { className: 'search-filter-container' },
                    react_1.default.createElement(Filter_1.default, { options: this.state.filterOptions, activeOption: this.state.activeOption, handleSwitch: function (e) { return _this.handleSwitchFilter(e); } }),
                    react_1.default.createElement(Button_1.default, { content: 'Search', action: this.handleButtonSubmit })))));
    };
    return Search;
}(react_1.default.Component));
function mapStateToProps(state) {
    return {
        searchQuery: state.searchQuery,
        fetchedMovies: state.fetchMovies.movies,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setSearchInput: redux_1.bindActionCreators(setSearchQuery_1.setSearchInput, dispatch),
        setSearchFilter: redux_1.bindActionCreators(setSearchQuery_1.setSearchFilter, dispatch),
        getMovies: redux_1.bindActionCreators(getMovies_1.getMovies, dispatch)
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Search);


/***/ }),

/***/ "./src/client/App/components/Search/components/Filter.scss":
/*!*****************************************************************!*\
  !*** ./src/client/App/components/Search/components/Filter.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/Search/components/Filter.tsx":
/*!****************************************************************!*\
  !*** ./src/client/App/components/Search/components/Filter.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Button_1 = __importDefault(__webpack_require__(/*! ../../common/Button */ "./src/client/App/components/common/Button.tsx"));
__webpack_require__(/*! ./Filter.scss */ "./src/client/App/components/Search/components/Filter.scss");
var Filter = function (props) {
    var setFilterOptions = props.options.map(function (option, index) {
        if (option === props.activeOption)
            return (react_1.default.createElement(Button_1.default, { key: index, content: option, action: props.handleSwitch, disabled: true }));
        return (react_1.default.createElement(Button_1.default, { key: index, content: option, action: props.handleSwitch, disabled: false }));
    });
    return (react_1.default.createElement("div", { className: 'filter-option' },
        react_1.default.createElement("h3", { className: 'filter-title' }, "Search by"),
        setFilterOptions));
};
exports.default = Filter;


/***/ }),

/***/ "./src/client/App/components/SearchResult/Card.scss":
/*!**********************************************************!*\
  !*** ./src/client/App/components/SearchResult/Card.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/SearchResult/Card.tsx":
/*!*********************************************************!*\
  !*** ./src/client/App/components/SearchResult/Card.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Card.scss */ "./src/client/App/components/SearchResult/Card.scss");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var Card = function (props) {
    var getGenresFromArray = function (genres) {
        return genres.reduce(function (genre, resultString) {
            var capitalizeGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
            return resultString + " " + capitalizeGenre;
        }, '');
    };
    return (react_1.default.createElement("div", { className: 'result-card', onClick: function () { return props.action(props); } },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/films/" + props.id, className: 'link' },
            react_1.default.createElement("img", { className: 'card-image', src: props.imageURL }),
            react_1.default.createElement("div", { className: 'card-content' },
                react_1.default.createElement("h3", { className: 'card-title' }, props.title),
                react_1.default.createElement("p", { className: 'card-date' }, props.releaseDate.substring(0, 4))),
            react_1.default.createElement("p", { className: 'card-genres' }, getGenresFromArray(props.genres)))));
};
exports.default = Card;


/***/ }),

/***/ "./src/client/App/components/SearchResult/ResultSorting.scss":
/*!*******************************************************************!*\
  !*** ./src/client/App/components/SearchResult/ResultSorting.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/SearchResult/ResultSorting.tsx":
/*!******************************************************************!*\
  !*** ./src/client/App/components/SearchResult/ResultSorting.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Button_1 = __importDefault(__webpack_require__(/*! ../common/Button */ "./src/client/App/components/common/Button.tsx"));
__webpack_require__(/*! ./ResultSorting.scss */ "./src/client/App/components/SearchResult/ResultSorting.scss");
var ResultSorting = function (props) {
    var setSortingOption = props.sortingOptions.map(function (option, index) {
        return react_1.default.createElement(Button_1.default, { content: option, key: index, action: props.handleSwitchSorting });
    });
    return (react_1.default.createElement("div", { className: 'sorting-container' },
        react_1.default.createElement("div", { className: 'sorting' },
            react_1.default.createElement("p", { className: 'sorting-counter' },
                props.numberOfItems,
                " movies found"),
            react_1.default.createElement("div", null,
                react_1.default.createElement("h3", { className: 'sorting-title' }, "Sort by"),
                setSortingOption))));
};
exports.default = ResultSorting;


/***/ }),

/***/ "./src/client/App/components/SearchResult/SearchResult.scss":
/*!******************************************************************!*\
  !*** ./src/client/App/components/SearchResult/SearchResult.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/SearchResult/SearchResult.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/App/components/SearchResult/SearchResult.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Card_1 = __importDefault(__webpack_require__(/*! ./Card */ "./src/client/App/components/SearchResult/Card.tsx"));
var ResultSorting_1 = __importDefault(__webpack_require__(/*! ./ResultSorting */ "./src/client/App/components/SearchResult/ResultSorting.tsx"));
__webpack_require__(/*! ./SearchResult.scss */ "./src/client/App/components/SearchResult/SearchResult.scss");
var SearchResult = /** @class */ (function (_super) {
    __extends(SearchResult, _super);
    function SearchResult(props) {
        var _this = _super.call(this, props) || this;
        _this.sortByReleaseDate = function (moviesArray) {
            return moviesArray.sort(function (first, second) { return first.releaseDate
                .localeCompare(second.releaseDate); });
        };
        _this.sortByRating = function (moviesArray) {
            return moviesArray.sort(function (first, second) { return first.rating - second.rating; });
        };
        _this.switchSorting = function (e) {
            var _a;
            var newOption = e.target.value;
            var active = Object.keys(_this.state.sortBy).find(function (key) { return _this.state.sortBy[key]; });
            var newState = {
                sortBy: __assign(__assign({}, _this.state.sortBy), (_a = {}, _a[newOption] = true, _a[active] = false, _a)),
                activeSortingOption: newOption
            };
            if (newOption !== active)
                _this.setState(newState);
        };
        _this.handleClick = function (movie) {
            _this.props.action(movie);
        };
        _this.state = {
            sortBy: {
                releaseDate: true,
                rating: false,
            },
            activeSortingOption: 'releaseDate',
        };
        return _this;
    }
    SearchResult.prototype.render = function () {
        var _this = this;
        var moviesSorted = this.props.movies;
        if (this.state.activeSortingOption === 'releaseDate') {
            this.sortByReleaseDate(moviesSorted);
        }
        if (this.state.activeSortingOption === 'rating') {
            this.sortByRating(moviesSorted);
        }
        var setSearchResult = moviesSorted.map(function (movie, index) {
            return react_1.default.createElement(Card_1.default, { action: function (movie) { return _this.handleClick(movie); }, id: movie.key, key: movie.key, title: movie.title, genres: movie.genres, releaseDate: movie.releaseDate, imageURL: movie.imageURL, rating: movie.rating, description: movie.description, runtime: movie.runtime });
        });
        var sortingOptions = Object.keys(this.state.sortBy);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ResultSorting_1.default, { numberOfItems: this.props.movies.length, sortingOptions: sortingOptions, activeOption: sortingOptions[0], handleSwitchSorting: this.switchSorting }),
            react_1.default.createElement("div", { className: 'search-result-container' },
                react_1.default.createElement("div", { className: 'search-result' }, setSearchResult))));
    };
    return SearchResult;
}(react_1.default.Component));
exports.default = SearchResult;


/***/ }),

/***/ "./src/client/App/components/SearchResult/ShowMovieInfo.scss":
/*!*******************************************************************!*\
  !*** ./src/client/App/components/SearchResult/ShowMovieInfo.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/SearchResult/ShowMovieInfo.tsx":
/*!******************************************************************!*\
  !*** ./src/client/App/components/SearchResult/ShowMovieInfo.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./ShowMovieInfo.scss */ "./src/client/App/components/SearchResult/ShowMovieInfo.scss");
__webpack_require__(/*! ../common/Button.scss */ "./src/client/App/components/common/Button.scss");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var ShowMovieInfo = function (props) {
    return (react_1.default.createElement("div", { className: 'movie-modal-container' },
        react_1.default.createElement("div", { className: 'movie-modal' },
            react_1.default.createElement("div", { className: 'movie-modal-header' },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: 'search-title' },
                    react_1.default.createElement("h1", null, "Netflixroulette")),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                    react_1.default.createElement("button", { className: 'button', onClick: function () { return props.action(props); } }, "Search"))),
            react_1.default.createElement("div", { className: 'movie-content-container' },
                react_1.default.createElement("img", { className: 'movie-image', src: props.imageURL }),
                react_1.default.createElement("div", { className: 'movie-modal-info' },
                    react_1.default.createElement("div", { className: 'movie-content-container' },
                        react_1.default.createElement("h3", { className: 'movie-modal-title' }, props.title),
                        react_1.default.createElement("p", { className: 'movie-rating' }, props.rating)),
                    react_1.default.createElement("p", { className: 'movie-genres' }, props.genres.join(' ')),
                    react_1.default.createElement("div", { className: 'movie-content-container' },
                        react_1.default.createElement("p", { className: 'movie-release' }, props.releaseDate.substring(0, 4)),
                        react_1.default.createElement("p", { className: 'movie-runtime' },
                            props.runtime,
                            " min")),
                    react_1.default.createElement("p", null, props.description))))));
};
exports.default = ShowMovieInfo;


/***/ }),

/***/ "./src/client/App/components/common/Button.scss":
/*!******************************************************!*\
  !*** ./src/client/App/components/common/Button.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/common/Button.tsx":
/*!*****************************************************!*\
  !*** ./src/client/App/components/common/Button.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Button.scss */ "./src/client/App/components/common/Button.scss");
var Button = function (props) {
    return (react_1.default.createElement("button", { className: 'button', onClick: props.action, value: props.content, disabled: props.disabled }, props.content));
};
exports.default = Button;


/***/ }),

/***/ "./src/client/App/components/common/Input.scss":
/*!*****************************************************!*\
  !*** ./src/client/App/components/common/Input.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/client/App/components/common/Input.tsx":
/*!****************************************************!*\
  !*** ./src/client/App/components/common/Input.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Input.scss */ "./src/client/App/components/common/Input.scss");
var Input = function (props) {
    return (react_1.default.createElement("input", { className: 'input', type: props.type, onKeyUp: props.submitAction, onChange: props.changeAction }));
};
exports.default = Input;


/***/ }),

/***/ "./src/client/App/constants/Constants.ts":
/*!***********************************************!*\
  !*** ./src/client/App/constants/Constants.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["FETCH_MOVIES_SUCCESS"] = "FETCH_MOVIES_SUCCESS";
    ActionTypes["FETCH_MOVIES_PENDING"] = "FETCH_MOVIES_PENDING";
    ActionTypes["FETCH_MOVIES_ERROR"] = "FETCH_MOVIES_ERROR";
    ActionTypes["SET_SEARCH_INPUT"] = "SET_SEARCH_INPUT";
    ActionTypes["SET_SEARCH_FILTER"] = "SET_SEARCH_FILTER";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
var LocalStorageKeys;
(function (LocalStorageKeys) {
    LocalStorageKeys["LAST_SEARCH"] = "LAST_SEARCH";
})(LocalStorageKeys = exports.LocalStorageKeys || (exports.LocalStorageKeys = {}));


/***/ }),

/***/ "./src/client/App/reducers/FetchMoviesReducer.ts":
/*!*******************************************************!*\
  !*** ./src/client/App/reducers/FetchMoviesReducer.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../constants/Constants */ "./src/client/App/constants/Constants.ts");
var initialState = {
    movies: [],
    pending: false
};
exports.FetchMovies = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case Constants_1.ActionTypes.FETCH_MOVIES_SUCCESS:
            return __assign(__assign({}, state), { movies: action.payload, pending: false });
        case Constants_1.ActionTypes.FETCH_MOVIES_PENDING:
            return __assign(__assign({}, state), { pending: true });
        case Constants_1.ActionTypes.FETCH_MOVIES_ERROR:
            return __assign(__assign({}, state), { pending: false });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/client/App/reducers/SetSearchQueryReducer.ts":
/*!**********************************************************!*\
  !*** ./src/client/App/reducers/SetSearchQueryReducer.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../constants/Constants */ "./src/client/App/constants/Constants.ts");
var initialState = {
    input: '',
    filterOption: ''
};
exports.SetQuery = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case Constants_1.ActionTypes.SET_SEARCH_INPUT:
            return __assign(__assign({}, state), { input: action.payload });
        case Constants_1.ActionTypes.SET_SEARCH_FILTER:
            return __assign(__assign({}, state), { filterOption: action.payload });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/client/App/reducers/rootReducer.ts":
/*!************************************************!*\
  !*** ./src/client/App/reducers/rootReducer.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "redux");
var FetchMoviesReducer_1 = __webpack_require__(/*! ./FetchMoviesReducer */ "./src/client/App/reducers/FetchMoviesReducer.ts");
var SetSearchQueryReducer_1 = __webpack_require__(/*! ./SetSearchQueryReducer */ "./src/client/App/reducers/SetSearchQueryReducer.ts");
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "connected-react-router");
var createRootReducer = function (history) { return redux_1.combineReducers({
    router: connected_react_router_1.connectRouter(history),
    fetchMovies: FetchMoviesReducer_1.FetchMovies,
    searchQuery: SetSearchQueryReducer_1.SetQuery
}); };
exports.default = createRootReducer;


/***/ }),

/***/ "./src/client/App/thunkAction/getMovies.ts":
/*!*************************************************!*\
  !*** ./src/client/App/thunkAction/getMovies.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fetchMoviesSuccess_1 = __webpack_require__(/*! ../actions/fetchMoviesSuccess */ "./src/client/App/actions/fetchMoviesSuccess.ts");
var fetchMoviesError_1 = __webpack_require__(/*! ../actions/fetchMoviesError */ "./src/client/App/actions/fetchMoviesError.ts");
var fetchMoviesPending_1 = __webpack_require__(/*! ../actions/fetchMoviesPending */ "./src/client/App/actions/fetchMoviesPending.ts");
exports.getMovies = function (url) {
    if (url === void 0) { url = 'https://reactjs-cdp.herokuapp.com/movies'; }
    console.log(url);
    return function (dispatch) {
        dispatch(fetchMoviesPending_1.fetchMoviesPending());
        fetch(url)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            if (res.error) {
                throw (res.error);
            }
            var mapMoviesData = res.data.map(function (movie) {
                return {
                    key: movie.id,
                    title: movie.title,
                    genres: movie.genres,
                    releaseDate: movie.release_date,
                    imageURL: movie.poster_path,
                    rating: movie.vote_average,
                    description: movie.overview,
                    runtime: movie.runtime
                };
            });
            dispatch(fetchMoviesSuccess_1.fetchMoviesSuccess(mapMoviesData));
        })
            .catch(function () { return dispatch(fetchMoviesError_1.fetchMoviesError()); });
    };
};


/***/ }),

/***/ "./src/server/server.tsx":
/*!*******************************!*\
  !*** ./src/server/server.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var server_1 = __webpack_require__(/*! react-dom/server */ "react-dom/server");
var ConfigureStore_1 = __webpack_require__(/*! ../client/App/ConfigureStore */ "./src/client/App/ConfigureStore.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var App_1 = __importDefault(__webpack_require__(/*! ../client/App/App */ "./src/client/App/App.tsx"));
var getMovies_1 = __webpack_require__(/*! ../client/App/thunkAction/getMovies */ "./src/client/App/thunkAction/getMovies.ts");
var node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ "node-fetch"));
var path = __webpack_require__(/*! path */ "path");
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
//(global as any).fetch = require('node-fetch');
Object.assign(global, { fetch: node_fetch_1.default });
var app = express_1.default();
var port = process.env.PORT || 3000;
var BUILD_DIR = path.join(process.cwd(), './public');
app.use('/static', express_1.default.static(path.join(BUILD_DIR, 'static')));
app.use('/images', express_1.default.static(path.join(BUILD_DIR, 'images')));
app.get('*', function (req, res) {
    var store = ConfigureStore_1.configureStore();
    getMovies_1.getMovies('https://reactjs-cdp.herokuapp.com/movies')(store.dispatch, store.getState, null);
    var Root = (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(App_1.default, { history: ConfigureStore_1.history })));
    var htmlContent = server_1.renderToString(Root);
    var preloadedState = store.getState();
    var html = "\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset=\"utf-8\">\n            <title>React</title>\n            <link rel=\"stylesheet\" href=\"/static/main.css\">\n        </head>\n        \n        <body>\n            <div id=\"root\">" + htmlContent + "</div>\n            <script>\n                window.__PRELOADED_STATE__ = " + JSON.stringify(preloadedState) + "\n            </script>\n            <script src=\"/static/main.js\"></script>\n        </body>\n        </html>\n    ";
    res.send(html);
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});


/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "is-browser":
/*!*****************************!*\
  !*** external "is-browser" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-browser");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9Db25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9hY3Rpb25zL2ZldGNoTW92aWVzRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvYWN0aW9ucy9mZXRjaE1vdmllc1BlbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvYWN0aW9ucy9mZXRjaE1vdmllc1N1Y2Nlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvYWN0aW9ucy9zZXRTZWFyY2hRdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9jb21wb25lbnRzL05vdEZvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9Ob3RGb3VuZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9QZW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2guc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvQXBwL2NvbXBvbmVudHMvU2VhcmNoL2NvbXBvbmVudHMvRmlsdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9TZWFyY2gvY29tcG9uZW50cy9GaWx0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvQXBwL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0L0NhcmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC9SZXN1bHRTb3J0aW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9TZWFyY2hSZXN1bHQvUmVzdWx0U29ydGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9TZWFyY2hSZXN1bHQvU2VhcmNoUmVzdWx0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9TZWFyY2hSZXN1bHQvU2VhcmNoUmVzdWx0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC9TaG93TW92aWVJbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9TZWFyY2hSZXN1bHQvU2hvd01vdmllSW5mby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9jb21tb24vQnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvY29tcG9uZW50cy9jb21tb24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9jb21wb25lbnRzL2NvbW1vbi9JbnB1dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvQXBwL2NvbXBvbmVudHMvY29tbW9uL0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9jb25zdGFudHMvQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvQXBwL3JlZHVjZXJzL0ZldGNoTW92aWVzUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC9yZWR1Y2Vycy9TZXRTZWFyY2hRdWVyeVJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvcmVkdWNlcnMvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAvdGh1bmtBY3Rpb24vZ2V0TW92aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpc3RvcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpcy1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztR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QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2xDRCxtRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvc2VydmVyLnRzeFwiKTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgU2VhcmNoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoXCIpKTtcclxucmVxdWlyZShcIi4vQXBwLnNjc3NcIik7XHJcbnZhciBTZWFyY2hSZXN1bHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC9TZWFyY2hSZXN1bHRcIikpO1xyXG52YXIgU2hvd01vdmllSW5mb18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0L1Nob3dNb3ZpZUluZm9cIikpO1xyXG52YXIgcmVhY3RfcmVkdXhfMSA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcclxudmFyIGNvbm5lY3RlZF9yZWFjdF9yb3V0ZXJfMSA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIpO1xyXG52YXIgcmVhY3Rfcm91dGVyXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xyXG52YXIgTm90Rm91bmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL05vdEZvdW5kXCIpKTtcclxudmFyIFBlbmRpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL1BlbmRpbmdcIikpO1xyXG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFwcCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFwcChwcm9wcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmhhbmRsZVNlbGVjdE1vdmllID0gZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDdXJyZW50TW92aWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TW92aWU6IG1vdmllXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlU2VsZWN0U2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93Q3VycmVudE1vdmllOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd0N1cnJlbnRNb3ZpZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBBcHAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBnZXRSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZS5jdXJyZW50TW92aWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyXzEuUm91dGUsIHsgcGF0aDogXCIvZmlsbXMvXCIgKyBfdGhpcy5zdGF0ZS5jdXJyZW50TW92aWUuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTaG93TW92aWVJbmZvXzEuZGVmYXVsdCwgeyBrZXk6IF90aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZS5pZCwgaWQ6IF90aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZS5pZCwgdGl0bGU6IF90aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZS50aXRsZSwgZ2VucmVzOiBfdGhpcy5zdGF0ZS5jdXJyZW50TW92aWUuZ2VucmVzLCByZWxlYXNlRGF0ZTogX3RoaXMuc3RhdGUuY3VycmVudE1vdmllLnJlbGVhc2VEYXRlLCBpbWFnZVVSTDogX3RoaXMuc3RhdGUuY3VycmVudE1vdmllLmltYWdlVVJMLCByYXRpbmc6IF90aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZS5yYXRpbmcsIGRlc2NyaXB0aW9uOiBfdGhpcy5zdGF0ZS5jdXJyZW50TW92aWUuZGVzY3JpcHRpb24sIGFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU2VsZWN0U2VhcmNoKCk7IH0sIHJ1bnRpbWU6IF90aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZS5ydW50aW1lIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNlYXJjaFJlc3VsdF8xLmRlZmF1bHQsIHsgbW92aWVzOiBfdGhpcy5wcm9wcy5mZXRjaGVkTW92aWVzLCBhY3Rpb246IGZ1bmN0aW9uIChtb3ZpZSkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU2VsZWN0TW92aWUobW92aWUpOyB9IH0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoX3RoaXMucHJvcHMuZmV0Y2hlZE1vdmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5wZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNlYXJjaF8xLmRlZmF1bHQsIHsgZmlsdGVyT3B0aW9uczogWyd0aXRsZScsICdnZW5yZXMnXSB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGVuZGluZ18xLmRlZmF1bHQsIG51bGwpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2VhcmNoXzEuZGVmYXVsdCwgeyBmaWx0ZXJPcHRpb25zOiBbJ3RpdGxlJywgJ2dlbnJlcyddIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RGb3VuZF8xLmRlZmF1bHQsIG51bGwpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZWFyY2hfMS5kZWZhdWx0LCB7IGZpbHRlck9wdGlvbnM6IFsndGl0bGUnLCAnZ2VucmVzJ10gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2VhcmNoUmVzdWx0XzEuZGVmYXVsdCwgeyBtb3ZpZXM6IF90aGlzLnByb3BzLmZldGNoZWRNb3ZpZXMsIGFjdGlvbjogZnVuY3Rpb24gKG1vdmllKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTZWxlY3RNb3ZpZShtb3ZpZSk7IH0gfSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ0FwcCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29ubmVjdGVkX3JlYWN0X3JvdXRlcl8xLkNvbm5lY3RlZFJvdXRlciwgeyBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnkgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl8xLlN3aXRjaCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfMS5Sb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogXCIvXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2VhcmNoXzEuZGVmYXVsdCwgeyBmaWx0ZXJPcHRpb25zOiBbJ3RpdGxlJywgJ2dlbnJlcyddIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RGb3VuZF8xLmRlZmF1bHQsIG51bGwpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfMS5Sb3V0ZSwgeyBwYXRoOiBcIi9zZWFyY2gvXCIgfSwgZ2V0UmVzdWx0KCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl8xLlJvdXRlLCB7IHBhdGg6IFwiL2ZpbG1zL1wiIH0sIGdldFJlc3VsdCgpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfMS5Sb3V0ZSwgeyBwYXRoOiBcIipcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZWFyY2hfMS5kZWZhdWx0LCB7IGZpbHRlck9wdGlvbnM6IFsndGl0bGUnLCAnZ2VucmVzJ10gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdEZvdW5kXzEuZGVmYXVsdCwgbnVsbCkpKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnZm9vdGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdmb290ZXItY29udGVudCcgfSwgXCJOZXRmbGl4cm91bGV0dGVcIikpKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwcDtcclxufShyZWFjdF8xLkNvbXBvbmVudCkpO1xyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hlZE1vdmllczogc3RhdGUuZmV0Y2hNb3ZpZXMubW92aWVzLFxyXG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLmZldGNoTW92aWVzLnBlbmRpbmdcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfcmVkdXhfMS5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlZHV4XzEgPSByZXF1aXJlKFwicmVkdXhcIik7XHJcbnZhciByZWR1eF9kZXZ0b29sc19leHRlbnNpb25fMSA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7XHJcbnZhciBoaXN0b3J5XzEgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcclxudmFyIGNvbm5lY3RlZF9yZWFjdF9yb3V0ZXJfMSA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIpO1xyXG52YXIgcmVkdXhfdGh1bmtfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVkdXgtdGh1bmtcIikpO1xyXG52YXIgcm9vdFJlZHVjZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZWR1Y2Vycy9yb290UmVkdWNlclwiKSk7XHJcbnZhciBpc19icm93c2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImlzLWJyb3dzZXJcIikpO1xyXG5leHBvcnRzLmhpc3RvcnkgPSBpc19icm93c2VyXzEuZGVmYXVsdCA/IGhpc3RvcnlfMS5jcmVhdGVCcm93c2VySGlzdG9yeSgpIDogaGlzdG9yeV8xLmNyZWF0ZU1lbW9yeUhpc3RvcnkoKTtcclxudmFyIHN0YXRlID0ge307XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgc3RhdGUgPSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXztcclxuICAgIGRlbGV0ZSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXztcclxufVxyXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcclxuICAgIHJldHVybiByZWR1eF8xLmNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyXzEuZGVmYXVsdChleHBvcnRzLmhpc3RvcnkpLCBzdGF0ZSwgcmVkdXhfZGV2dG9vbHNfZXh0ZW5zaW9uXzEuY29tcG9zZVdpdGhEZXZUb29scyhyZWR1eF8xLmFwcGx5TWlkZGxld2FyZShyZWR1eF90aHVua18xLmRlZmF1bHQsIGNvbm5lY3RlZF9yZWFjdF9yb3V0ZXJfMS5yb3V0ZXJNaWRkbGV3YXJlKGV4cG9ydHMuaGlzdG9yeSkpKSk7XHJcbn1cclxuZXhwb3J0cy5jb25maWd1cmVTdG9yZSA9IGNvbmZpZ3VyZVN0b3JlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL0NvbnN0YW50c1wiKTtcclxuZXhwb3J0cy5mZXRjaE1vdmllc0Vycm9yID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcclxuICAgIHR5cGU6IENvbnN0YW50c18xLkFjdGlvblR5cGVzLkZFVENIX01PVklFU19FUlJPUixcclxuICAgIHBheWxvYWQ6IHRydWUsXHJcbn0pOyB9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL0NvbnN0YW50c1wiKTtcclxuZXhwb3J0cy5mZXRjaE1vdmllc1BlbmRpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xyXG4gICAgdHlwZTogQ29uc3RhbnRzXzEuQWN0aW9uVHlwZXMuRkVUQ0hfTU9WSUVTX1BFTkRJTkcsXHJcbn0pOyB9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL0NvbnN0YW50c1wiKTtcclxuZXhwb3J0cy5mZXRjaE1vdmllc1N1Y2Nlc3MgPSBmdW5jdGlvbiAobW92aWVzKSB7IHJldHVybiAoe1xyXG4gICAgdHlwZTogQ29uc3RhbnRzXzEuQWN0aW9uVHlwZXMuRkVUQ0hfTU9WSUVTX1NVQ0NFU1MsXHJcbiAgICBwYXlsb2FkOiBtb3ZpZXNcclxufSk7IH07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvQ29uc3RhbnRzXCIpO1xyXG5leHBvcnRzLnNldFNlYXJjaElucHV0ID0gZnVuY3Rpb24gKGlucHV0KSB7IHJldHVybiAoe1xyXG4gICAgdHlwZTogQ29uc3RhbnRzXzEuQWN0aW9uVHlwZXMuU0VUX1NFQVJDSF9JTlBVVCxcclxuICAgIHBheWxvYWQ6IGlucHV0XHJcbn0pOyB9O1xyXG5leHBvcnRzLnNldFNlYXJjaEZpbHRlciA9IGZ1bmN0aW9uIChmaWx0ZXJPcHRpb24pIHsgcmV0dXJuICh7XHJcbiAgICB0eXBlOiBDb25zdGFudHNfMS5BY3Rpb25UeXBlcy5TRVRfU0VBUkNIX0ZJTFRFUixcclxuICAgIHBheWxvYWQ6IGZpbHRlck9wdGlvblxyXG59KTsgfTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnJlcXVpcmUoXCIuL05vdEZvdW5kLnNjc3NcIik7XHJcbnZhciBOb3RGb3VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdub3QtZm91bmQnIH0sIFwiTm8gZmlsbXMgZm91bmRcIikpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBOb3RGb3VuZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxucmVxdWlyZShcIi4vTm90Rm91bmQuc2Nzc1wiKTtcclxudmFyIFBlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnbm90LWZvdW5kJyB9LCBcIlBsZWFzZSB3YWl0Li4uXCIpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUGVuZGluZztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbW1vbi9CdXR0b25cIikpO1xyXG52YXIgSW5wdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tbW9uL0lucHV0XCIpKTtcclxudmFyIEZpbHRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvRmlsdGVyXCIpKTtcclxucmVxdWlyZShcIi4vU2VhcmNoLnNjc3NcIik7XHJcbnZhciByZWR1eF8xID0gcmVxdWlyZShcInJlZHV4XCIpO1xyXG52YXIgcmVhY3RfcmVkdXhfMSA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcclxudmFyIHNldFNlYXJjaFF1ZXJ5XzEgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9zZXRTZWFyY2hRdWVyeVwiKTtcclxudmFyIHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xyXG52YXIgQ29uZmlndXJlU3RvcmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db25maWd1cmVTdG9yZVwiKTtcclxudmFyIGdldE1vdmllc18xID0gcmVxdWlyZShcIi4uLy4uL3RodW5rQWN0aW9uL2dldE1vdmllc1wiKTtcclxudmFyIENvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbnN0YW50cy9Db25zdGFudHNcIik7XHJcbnZhciBTZWFyY2ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2VhcmNoLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2VhcmNoKHByb3BzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlQnV0dG9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVTZWFyY2goKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzXzEuTG9jYWxTdG9yYWdlS2V5cy5MQVNUX1NFQVJDSCwgX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIENvbmZpZ3VyZVN0b3JlXzEuaGlzdG9yeS5wdXNoKFwiL3NlYXJjaC9cIiArIF90aGlzLnN0YXRlLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogaW5wdXRUZXh0IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gXCJodHRwczovL3JlYWN0anMtY2RwLmhlcm9rdWFwcC5jb20vbW92aWVzP3NlYXJjaD1cIiArIF90aGlzLnByb3BzLnNlYXJjaFF1ZXJ5LmlucHV0ICsgXCImc2VhcmNoQnk9XCIgKyBfdGhpcy5wcm9wcy5zZWFyY2hRdWVyeS5maWx0ZXJPcHRpb247XHJcbiAgICAgICAgICAgIF90aGlzLnByb3BzLmdldE1vdmllcyh1cmwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlSW5wdXRTdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZVNlYXJjaCgpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzXzEuTG9jYWxTdG9yYWdlS2V5cy5MQVNUX1NFQVJDSCwgX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBDb25maWd1cmVTdG9yZV8xLmhpc3RvcnkucHVzaChcIi9zZWFyY2gvXCIgKyBfdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlU3dpdGNoRmlsdGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBhY3RpdmVPcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb25zOiBwcm9wcy5maWx0ZXJPcHRpb25zLFxyXG4gICAgICAgICAgICBhY3RpdmVPcHRpb246IHByb3BzLmZpbHRlck9wdGlvbnNbMF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFNlYXJjaC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChwcmV2UHJvcHMgPT09IHRoaXMucHJvcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hJbnB1dCh0aGlzLnN0YXRlLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldFNlYXJjaEZpbHRlcih0aGlzLnN0YXRlLmFjdGl2ZU9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNlYXJjaC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlYXJjaFBhdGhGcmFnbWVudCA9IC9zZWFyY2hcXC8oLiopLy5leGVjKENvbmZpZ3VyZVN0b3JlXzEuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgaWYgKHNlYXJjaFBhdGhGcmFnbWVudCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHNfMS5Mb2NhbFN0b3JhZ2VLZXlzLkxBU1RfU0VBUkNILCBzZWFyY2hQYXRoRnJhZ21lbnRbMV0pO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gXCJodHRwczovL3JlYWN0anMtY2RwLmhlcm9rdWFwcC5jb20vbW92aWVzP3NlYXJjaD1cIiArIHNlYXJjaFBhdGhGcmFnbWVudFsxXSArIFwiJnNlYXJjaEJ5PVwiICsgdGhpcy5zdGF0ZS5hY3RpdmVPcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TW92aWVzKHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoSW5wdXQoc2VhcmNoUGF0aEZyYWdtZW50WzFdKTtcclxuICAgICAgICAgICAgQ29uZmlndXJlU3RvcmVfMS5oaXN0b3J5LnB1c2goXCIvc2VhcmNoL1wiICsgc2VhcmNoUGF0aEZyYWdtZW50WzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBcImh0dHBzOi8vcmVhY3Rqcy1jZHAuaGVyb2t1YXBwLmNvbS9tb3ZpZXM/c2VhcmNoPVwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzXzEuTG9jYWxTdG9yYWdlS2V5cy5MQVNUX1NFQVJDSCkgKyBcIiZzZWFyY2hCeT1cIiArIHRoaXMuc3RhdGUuYWN0aXZlT3B0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldE1vdmllcyh1cmwpO1xyXG4gICAgICAgICAgICBDb25maWd1cmVTdG9yZV8xLmhpc3RvcnkucHVzaChcIi9zZWFyY2gvXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHNfMS5Mb2NhbFN0b3JhZ2VLZXlzLkxBU1RfU0VBUkNIKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNlYXJjaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NlYXJjaC1jb250YWluZXInIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnc2VhcmNoJyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHsgdG86ICcvJywgY2xhc3NOYW1lOiAnc2VhcmNoLXRpdGxlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJOZXRmbGl4cm91bGV0dGVcIikpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIkZpbmQgeW91ciBtb3ZpZVwiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KElucHV0XzEuZGVmYXVsdCwgeyB0eXBlOiAndGV4dCcsIGNoYW5nZUFjdGlvbjogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSwgc3VibWl0QWN0aW9uOiB0aGlzLmhhbmRsZUlucHV0U3VibWl0IH0pLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzZWFyY2gtZmlsdGVyLWNvbnRhaW5lcicgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGaWx0ZXJfMS5kZWZhdWx0LCB7IG9wdGlvbnM6IHRoaXMuc3RhdGUuZmlsdGVyT3B0aW9ucywgYWN0aXZlT3B0aW9uOiB0aGlzLnN0YXRlLmFjdGl2ZU9wdGlvbiwgaGFuZGxlU3dpdGNoOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU3dpdGNoRmlsdGVyKGUpOyB9IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbl8xLmRlZmF1bHQsIHsgY29udGVudDogJ1NlYXJjaCcsIGFjdGlvbjogdGhpcy5oYW5kbGVCdXR0b25TdWJtaXQgfSkpKSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWFyY2g7XHJcbn0ocmVhY3RfMS5kZWZhdWx0LkNvbXBvbmVudCkpO1xyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoUXVlcnk6IHN0YXRlLnNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgIGZldGNoZWRNb3ZpZXM6IHN0YXRlLmZldGNoTW92aWVzLm1vdmllcyxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0OiByZWR1eF8xLmJpbmRBY3Rpb25DcmVhdG9ycyhzZXRTZWFyY2hRdWVyeV8xLnNldFNlYXJjaElucHV0LCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0U2VhcmNoRmlsdGVyOiByZWR1eF8xLmJpbmRBY3Rpb25DcmVhdG9ycyhzZXRTZWFyY2hRdWVyeV8xLnNldFNlYXJjaEZpbHRlciwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIGdldE1vdmllczogcmVkdXhfMS5iaW5kQWN0aW9uQ3JlYXRvcnMoZ2V0TW92aWVzXzEuZ2V0TW92aWVzLCBkaXNwYXRjaClcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfcmVkdXhfMS5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWFyY2gpO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21tb24vQnV0dG9uXCIpKTtcclxucmVxdWlyZShcIi4vRmlsdGVyLnNjc3NcIik7XHJcbnZhciBGaWx0ZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBzZXRGaWx0ZXJPcHRpb25zID0gcHJvcHMub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcclxuICAgICAgICBpZiAob3B0aW9uID09PSBwcm9wcy5hY3RpdmVPcHRpb24pXHJcbiAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXzEuZGVmYXVsdCwgeyBrZXk6IGluZGV4LCBjb250ZW50OiBvcHRpb24sIGFjdGlvbjogcHJvcHMuaGFuZGxlU3dpdGNoLCBkaXNhYmxlZDogdHJ1ZSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCdXR0b25fMS5kZWZhdWx0LCB7IGtleTogaW5kZXgsIGNvbnRlbnQ6IG9wdGlvbiwgYWN0aW9uOiBwcm9wcy5oYW5kbGVTd2l0Y2gsIGRpc2FibGVkOiBmYWxzZSB9KSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdmaWx0ZXItb3B0aW9uJyB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBjbGFzc05hbWU6ICdmaWx0ZXItdGl0bGUnIH0sIFwiU2VhcmNoIGJ5XCIpLFxyXG4gICAgICAgIHNldEZpbHRlck9wdGlvbnMpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRmlsdGVyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxucmVxdWlyZShcIi4vQ2FyZC5zY3NzXCIpO1xyXG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XHJcbnZhciBDYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgZ2V0R2VucmVzRnJvbUFycmF5ID0gZnVuY3Rpb24gKGdlbnJlcykge1xyXG4gICAgICAgIHJldHVybiBnZW5yZXMucmVkdWNlKGZ1bmN0aW9uIChnZW5yZSwgcmVzdWx0U3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBjYXBpdGFsaXplR2VucmUgPSBnZW5yZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdlbnJlLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0U3RyaW5nICsgXCIgXCIgKyBjYXBpdGFsaXplR2VucmU7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdyZXN1bHQtY2FyZCcsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb3BzLmFjdGlvbihwcm9wcyk7IH0gfSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgeyB0bzogXCIvZmlsbXMvXCIgKyBwcm9wcy5pZCwgY2xhc3NOYW1lOiAnbGluaycgfSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6ICdjYXJkLWltYWdlJywgc3JjOiBwcm9wcy5pbWFnZVVSTCB9KSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjYXJkLWNvbnRlbnQnIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgzXCIsIHsgY2xhc3NOYW1lOiAnY2FyZC10aXRsZScgfSwgcHJvcHMudGl0bGUpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiAnY2FyZC1kYXRlJyB9LCBwcm9wcy5yZWxlYXNlRGF0ZS5zdWJzdHJpbmcoMCwgNCkpKSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiAnY2FyZC1nZW5yZXMnIH0sIGdldEdlbnJlc0Zyb21BcnJheShwcm9wcy5nZW5yZXMpKSkpKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FyZDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBCdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tbW9uL0J1dHRvblwiKSk7XHJcbnJlcXVpcmUoXCIuL1Jlc3VsdFNvcnRpbmcuc2Nzc1wiKTtcclxudmFyIFJlc3VsdFNvcnRpbmcgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBzZXRTb3J0aW5nT3B0aW9uID0gcHJvcHMuc29ydGluZ09wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbl8xLmRlZmF1bHQsIHsgY29udGVudDogb3B0aW9uLCBrZXk6IGluZGV4LCBhY3Rpb246IHByb3BzLmhhbmRsZVN3aXRjaFNvcnRpbmcgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzb3J0aW5nLWNvbnRhaW5lcicgfSxcclxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NvcnRpbmcnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogJ3NvcnRpbmctY291bnRlcicgfSxcclxuICAgICAgICAgICAgICAgIHByb3BzLm51bWJlck9mSXRlbXMsXHJcbiAgICAgICAgICAgICAgICBcIiBtb3ZpZXMgZm91bmRcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgzXCIsIHsgY2xhc3NOYW1lOiAnc29ydGluZy10aXRsZScgfSwgXCJTb3J0IGJ5XCIpLFxyXG4gICAgICAgICAgICAgICAgc2V0U29ydGluZ09wdGlvbikpKSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlc3VsdFNvcnRpbmc7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NhcmRcIikpO1xyXG52YXIgUmVzdWx0U29ydGluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Jlc3VsdFNvcnRpbmdcIikpO1xyXG5yZXF1aXJlKFwiLi9TZWFyY2hSZXN1bHQuc2Nzc1wiKTtcclxudmFyIFNlYXJjaFJlc3VsdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTZWFyY2hSZXN1bHQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWFyY2hSZXN1bHQocHJvcHMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zb3J0QnlSZWxlYXNlRGF0ZSA9IGZ1bmN0aW9uIChtb3ZpZXNBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW92aWVzQXJyYXkuc29ydChmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkgeyByZXR1cm4gZmlyc3QucmVsZWFzZURhdGVcclxuICAgICAgICAgICAgICAgIC5sb2NhbGVDb21wYXJlKHNlY29uZC5yZWxlYXNlRGF0ZSk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuc29ydEJ5UmF0aW5nID0gZnVuY3Rpb24gKG1vdmllc0FycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZXNBcnJheS5zb3J0KGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7IHJldHVybiBmaXJzdC5yYXRpbmcgLSBzZWNvbmQucmF0aW5nOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLnN3aXRjaFNvcnRpbmcgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IE9iamVjdC5rZXlzKF90aGlzLnN0YXRlLnNvcnRCeSkuZmluZChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBfdGhpcy5zdGF0ZS5zb3J0Qnlba2V5XTsgfSk7XHJcbiAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHNvcnRCeTogX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLnN0YXRlLnNvcnRCeSksIChfYSA9IHt9LCBfYVtuZXdPcHRpb25dID0gdHJ1ZSwgX2FbYWN0aXZlXSA9IGZhbHNlLCBfYSkpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU29ydGluZ09wdGlvbjogbmV3T3B0aW9uXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChuZXdPcHRpb24gIT09IGFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnByb3BzLmFjdGlvbihtb3ZpZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc29ydEJ5OiB7XHJcbiAgICAgICAgICAgICAgICByZWxlYXNlRGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGl2ZVNvcnRpbmdPcHRpb246ICdyZWxlYXNlRGF0ZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBTZWFyY2hSZXN1bHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBtb3ZpZXNTb3J0ZWQgPSB0aGlzLnByb3BzLm1vdmllcztcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTb3J0aW5nT3B0aW9uID09PSAncmVsZWFzZURhdGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEJ5UmVsZWFzZURhdGUobW92aWVzU29ydGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU29ydGluZ09wdGlvbiA9PT0gJ3JhdGluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0QnlSYXRpbmcobW92aWVzU29ydGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNldFNlYXJjaFJlc3VsdCA9IG1vdmllc1NvcnRlZC5tYXAoZnVuY3Rpb24gKG1vdmllLCBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZF8xLmRlZmF1bHQsIHsgYWN0aW9uOiBmdW5jdGlvbiAobW92aWUpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUNsaWNrKG1vdmllKTsgfSwgaWQ6IG1vdmllLmtleSwga2V5OiBtb3ZpZS5rZXksIHRpdGxlOiBtb3ZpZS50aXRsZSwgZ2VucmVzOiBtb3ZpZS5nZW5yZXMsIHJlbGVhc2VEYXRlOiBtb3ZpZS5yZWxlYXNlRGF0ZSwgaW1hZ2VVUkw6IG1vdmllLmltYWdlVVJMLCByYXRpbmc6IG1vdmllLnJhdGluZywgZGVzY3JpcHRpb246IG1vdmllLmRlc2NyaXB0aW9uLCBydW50aW1lOiBtb3ZpZS5ydW50aW1lIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBzb3J0aW5nT3B0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuc29ydEJ5KTtcclxuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVzdWx0U29ydGluZ18xLmRlZmF1bHQsIHsgbnVtYmVyT2ZJdGVtczogdGhpcy5wcm9wcy5tb3ZpZXMubGVuZ3RoLCBzb3J0aW5nT3B0aW9uczogc29ydGluZ09wdGlvbnMsIGFjdGl2ZU9wdGlvbjogc29ydGluZ09wdGlvbnNbMF0sIGhhbmRsZVN3aXRjaFNvcnRpbmc6IHRoaXMuc3dpdGNoU29ydGluZyB9KSxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzZWFyY2gtcmVzdWx0LWNvbnRhaW5lcicgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnc2VhcmNoLXJlc3VsdCcgfSwgc2V0U2VhcmNoUmVzdWx0KSkpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VhcmNoUmVzdWx0O1xyXG59KHJlYWN0XzEuZGVmYXVsdC5Db21wb25lbnQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2VhcmNoUmVzdWx0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxucmVxdWlyZShcIi4vU2hvd01vdmllSW5mby5zY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi4vY29tbW9uL0J1dHRvbi5zY3NzXCIpO1xyXG52YXIgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XHJcbnZhciBTaG93TW92aWVJbmZvID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnbW92aWUtbW9kYWwtY29udGFpbmVyJyB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnbW92aWUtbW9kYWwnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnbW92aWUtbW9kYWwtaGVhZGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHsgdG86ICcvJywgY2xhc3NOYW1lOiAnc2VhcmNoLXRpdGxlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJOZXRmbGl4cm91bGV0dGVcIikpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHsgdG86ICcvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiAnYnV0dG9uJywgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvcHMuYWN0aW9uKHByb3BzKTsgfSB9LCBcIlNlYXJjaFwiKSkpLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21vdmllLWNvbnRlbnQtY29udGFpbmVyJyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6ICdtb3ZpZS1pbWFnZScsIHNyYzogcHJvcHMuaW1hZ2VVUkwgfSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21vdmllLW1vZGFsLWluZm8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdtb3ZpZS1jb250ZW50LWNvbnRhaW5lcicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7IGNsYXNzTmFtZTogJ21vdmllLW1vZGFsLXRpdGxlJyB9LCBwcm9wcy50aXRsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogJ21vdmllLXJhdGluZycgfSwgcHJvcHMucmF0aW5nKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiAnbW92aWUtZ2VucmVzJyB9LCBwcm9wcy5nZW5yZXMuam9pbignICcpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21vdmllLWNvbnRlbnQtY29udGFpbmVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6ICdtb3ZpZS1yZWxlYXNlJyB9LCBwcm9wcy5yZWxlYXNlRGF0ZS5zdWJzdHJpbmcoMCwgNCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6ICdtb3ZpZS1ydW50aW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMucnVudGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG1pblwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIHByb3BzLmRlc2NyaXB0aW9uKSkpKSkpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTaG93TW92aWVJbmZvO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxucmVxdWlyZShcIi4vQnV0dG9uLnNjc3NcIik7XHJcbnZhciBCdXR0b24gPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6ICdidXR0b24nLCBvbkNsaWNrOiBwcm9wcy5hY3Rpb24sIHZhbHVlOiBwcm9wcy5jb250ZW50LCBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQgfSwgcHJvcHMuY29udGVudCkpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBCdXR0b247XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5yZXF1aXJlKFwiLi9JbnB1dC5zY3NzXCIpO1xyXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogJ2lucHV0JywgdHlwZTogcHJvcHMudHlwZSwgb25LZXlVcDogcHJvcHMuc3VibWl0QWN0aW9uLCBvbkNoYW5nZTogcHJvcHMuY2hhbmdlQWN0aW9uIH0pKTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBBY3Rpb25UeXBlcztcclxuKGZ1bmN0aW9uIChBY3Rpb25UeXBlcykge1xyXG4gICAgQWN0aW9uVHlwZXNbXCJGRVRDSF9NT1ZJRVNfU1VDQ0VTU1wiXSA9IFwiRkVUQ0hfTU9WSUVTX1NVQ0NFU1NcIjtcclxuICAgIEFjdGlvblR5cGVzW1wiRkVUQ0hfTU9WSUVTX1BFTkRJTkdcIl0gPSBcIkZFVENIX01PVklFU19QRU5ESU5HXCI7XHJcbiAgICBBY3Rpb25UeXBlc1tcIkZFVENIX01PVklFU19FUlJPUlwiXSA9IFwiRkVUQ0hfTU9WSUVTX0VSUk9SXCI7XHJcbiAgICBBY3Rpb25UeXBlc1tcIlNFVF9TRUFSQ0hfSU5QVVRcIl0gPSBcIlNFVF9TRUFSQ0hfSU5QVVRcIjtcclxuICAgIEFjdGlvblR5cGVzW1wiU0VUX1NFQVJDSF9GSUxURVJcIl0gPSBcIlNFVF9TRUFSQ0hfRklMVEVSXCI7XHJcbn0pKEFjdGlvblR5cGVzID0gZXhwb3J0cy5BY3Rpb25UeXBlcyB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHt9KSk7XHJcbnZhciBMb2NhbFN0b3JhZ2VLZXlzO1xyXG4oZnVuY3Rpb24gKExvY2FsU3RvcmFnZUtleXMpIHtcclxuICAgIExvY2FsU3RvcmFnZUtleXNbXCJMQVNUX1NFQVJDSFwiXSA9IFwiTEFTVF9TRUFSQ0hcIjtcclxufSkoTG9jYWxTdG9yYWdlS2V5cyA9IGV4cG9ydHMuTG9jYWxTdG9yYWdlS2V5cyB8fCAoZXhwb3J0cy5Mb2NhbFN0b3JhZ2VLZXlzID0ge30pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL0NvbnN0YW50c1wiKTtcclxudmFyIGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1vdmllczogW10sXHJcbiAgICBwZW5kaW5nOiBmYWxzZVxyXG59O1xyXG5leHBvcnRzLkZldGNoTW92aWVzID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gaW5pdGlhbFN0YXRlOyB9XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHNfMS5BY3Rpb25UeXBlcy5GRVRDSF9NT1ZJRVNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgbW92aWVzOiBhY3Rpb24ucGF5bG9hZCwgcGVuZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHNfMS5BY3Rpb25UeXBlcy5GRVRDSF9NT1ZJRVNfUEVORElORzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgcGVuZGluZzogdHJ1ZSB9KTtcclxuICAgICAgICBjYXNlIENvbnN0YW50c18xLkFjdGlvblR5cGVzLkZFVENIX01PVklFU19FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgcGVuZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvQ29uc3RhbnRzXCIpO1xyXG52YXIgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaW5wdXQ6ICcnLFxyXG4gICAgZmlsdGVyT3B0aW9uOiAnJ1xyXG59O1xyXG5leHBvcnRzLlNldFF1ZXJ5ID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gaW5pdGlhbFN0YXRlOyB9XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHNfMS5BY3Rpb25UeXBlcy5TRVRfU0VBUkNIX0lOUFVUOlxyXG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHN0YXRlKSwgeyBpbnB1dDogYWN0aW9uLnBheWxvYWQgfSk7XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHNfMS5BY3Rpb25UeXBlcy5TRVRfU0VBUkNIX0ZJTFRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgZmlsdGVyT3B0aW9uOiBhY3Rpb24ucGF5bG9hZCB9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWR1eF8xID0gcmVxdWlyZShcInJlZHV4XCIpO1xyXG52YXIgRmV0Y2hNb3ZpZXNSZWR1Y2VyXzEgPSByZXF1aXJlKFwiLi9GZXRjaE1vdmllc1JlZHVjZXJcIik7XHJcbnZhciBTZXRTZWFyY2hRdWVyeVJlZHVjZXJfMSA9IHJlcXVpcmUoXCIuL1NldFNlYXJjaFF1ZXJ5UmVkdWNlclwiKTtcclxudmFyIGNvbm5lY3RlZF9yZWFjdF9yb3V0ZXJfMSA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIpO1xyXG52YXIgY3JlYXRlUm9vdFJlZHVjZXIgPSBmdW5jdGlvbiAoaGlzdG9yeSkgeyByZXR1cm4gcmVkdXhfMS5jb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcm91dGVyOiBjb25uZWN0ZWRfcmVhY3Rfcm91dGVyXzEuY29ubmVjdFJvdXRlcihoaXN0b3J5KSxcclxuICAgIGZldGNoTW92aWVzOiBGZXRjaE1vdmllc1JlZHVjZXJfMS5GZXRjaE1vdmllcyxcclxuICAgIHNlYXJjaFF1ZXJ5OiBTZXRTZWFyY2hRdWVyeVJlZHVjZXJfMS5TZXRRdWVyeVxyXG59KTsgfTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUm9vdFJlZHVjZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBmZXRjaE1vdmllc1N1Y2Nlc3NfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL2ZldGNoTW92aWVzU3VjY2Vzc1wiKTtcclxudmFyIGZldGNoTW92aWVzRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL2ZldGNoTW92aWVzRXJyb3JcIik7XHJcbnZhciBmZXRjaE1vdmllc1BlbmRpbmdfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL2ZldGNoTW92aWVzUGVuZGluZ1wiKTtcclxuZXhwb3J0cy5nZXRNb3ZpZXMgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICBpZiAodXJsID09PSB2b2lkIDApIHsgdXJsID0gJ2h0dHBzOi8vcmVhY3Rqcy1jZHAuaGVyb2t1YXBwLmNvbS9tb3ZpZXMnOyB9XHJcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoTW92aWVzUGVuZGluZ18xLmZldGNoTW92aWVzUGVuZGluZygpKTtcclxuICAgICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlcy5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG1hcE1vdmllc0RhdGEgPSByZXMuZGF0YS5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogbW92aWUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1vdmllLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdlbnJlczogbW92aWUuZ2VucmVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2VEYXRlOiBtb3ZpZS5yZWxlYXNlX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVUkw6IG1vdmllLnBvc3Rlcl9wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhdGluZzogbW92aWUudm90ZV9hdmVyYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtb3ZpZS5vdmVydmlldyxcclxuICAgICAgICAgICAgICAgICAgICBydW50aW1lOiBtb3ZpZS5ydW50aW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hNb3ZpZXNTdWNjZXNzXzEuZmV0Y2hNb3ZpZXNTdWNjZXNzKG1hcE1vdmllc0RhdGEpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gZGlzcGF0Y2goZmV0Y2hNb3ZpZXNFcnJvcl8xLmZldGNoTW92aWVzRXJyb3IoKSk7IH0pO1xyXG4gICAgfTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIHNlcnZlcl8xID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XHJcbnZhciBDb25maWd1cmVTdG9yZV8xID0gcmVxdWlyZShcIi4uL2NsaWVudC9BcHAvQ29uZmlndXJlU3RvcmVcIik7XHJcbnZhciByZWFjdF9yZWR1eF8xID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xyXG52YXIgQXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsaWVudC9BcHAvQXBwXCIpKTtcclxudmFyIGdldE1vdmllc18xID0gcmVxdWlyZShcIi4uL2NsaWVudC9BcHAvdGh1bmtBY3Rpb24vZ2V0TW92aWVzXCIpO1xyXG52YXIgbm9kZV9mZXRjaF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJub2RlLWZldGNoXCIpKTtcclxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbnZhciBleHByZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV4cHJlc3NcIikpO1xyXG4vLyhnbG9iYWwgYXMgYW55KS5mZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcclxuT2JqZWN0LmFzc2lnbihnbG9iYWwsIHsgZmV0Y2g6IG5vZGVfZmV0Y2hfMS5kZWZhdWx0IH0pO1xyXG52YXIgYXBwID0gZXhwcmVzc18xLmRlZmF1bHQoKTtcclxudmFyIHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcbnZhciBCVUlMRF9ESVIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4vcHVibGljJyk7XHJcbmFwcC51c2UoJy9zdGF0aWMnLCBleHByZXNzXzEuZGVmYXVsdC5zdGF0aWMocGF0aC5qb2luKEJVSUxEX0RJUiwgJ3N0YXRpYycpKSk7XHJcbmFwcC51c2UoJy9pbWFnZXMnLCBleHByZXNzXzEuZGVmYXVsdC5zdGF0aWMocGF0aC5qb2luKEJVSUxEX0RJUiwgJ2ltYWdlcycpKSk7XHJcbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgIHZhciBzdG9yZSA9IENvbmZpZ3VyZVN0b3JlXzEuY29uZmlndXJlU3RvcmUoKTtcclxuICAgIGdldE1vdmllc18xLmdldE1vdmllcygnaHR0cHM6Ly9yZWFjdGpzLWNkcC5oZXJva3VhcHAuY29tL21vdmllcycpKHN0b3JlLmRpc3BhdGNoLCBzdG9yZS5nZXRTdGF0ZSwgbnVsbCk7XHJcbiAgICB2YXIgUm9vdCA9IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yZWR1eF8xLlByb3ZpZGVyLCB7IHN0b3JlOiBzdG9yZSB9LFxyXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcF8xLmRlZmF1bHQsIHsgaGlzdG9yeTogQ29uZmlndXJlU3RvcmVfMS5oaXN0b3J5IH0pKSk7XHJcbiAgICB2YXIgaHRtbENvbnRlbnQgPSBzZXJ2ZXJfMS5yZW5kZXJUb1N0cmluZyhSb290KTtcclxuICAgIHZhciBwcmVsb2FkZWRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICB2YXIgaHRtbCA9IFwiXFxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cXG4gICAgICAgIDxodG1sPlxcbiAgICAgICAgPGhlYWQ+XFxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiPlxcbiAgICAgICAgICAgIDx0aXRsZT5SZWFjdDwvdGl0bGU+XFxuICAgICAgICAgICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCIvc3RhdGljL21haW4uY3NzXFxcIj5cXG4gICAgICAgIDwvaGVhZD5cXG4gICAgICAgIFxcbiAgICAgICAgPGJvZHk+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwicm9vdFxcXCI+XCIgKyBodG1sQ29udGVudCArIFwiPC9kaXY+XFxuICAgICAgICAgICAgPHNjcmlwdD5cXG4gICAgICAgICAgICAgICAgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18gPSBcIiArIEpTT04uc3RyaW5naWZ5KHByZWxvYWRlZFN0YXRlKSArIFwiXFxuICAgICAgICAgICAgPC9zY3JpcHQ+XFxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XFxcIi9zdGF0aWMvbWFpbi5qc1xcXCI+PC9zY3JpcHQ+XFxuICAgICAgICA8L2JvZHk+XFxuICAgICAgICA8L2h0bWw+XFxuICAgIFwiO1xyXG4gICAgcmVzLnNlbmQoaHRtbCk7XHJcbn0pO1xyXG5hcHAubGlzdGVuKHBvcnQsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdBcHAgbGlzdGVuaW5nIG9uIHBvcnQ6ICcgKyBwb3J0KTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzLWJyb3dzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=