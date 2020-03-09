import React from 'react';
import Button from '../common/Button';
import { ResultSortingProps } from './types';

const ResultSorting = (props: ResultSortingProps) => {
    return (
        <div>
            <span></span>
            <h4>Sort by</h4>
            {
                props.sortingOptions.map((option, index) => <Button
                        content = {option}
                        key = {index}
                        action = {props.handleSwitchSorting}
                    />)
            }
        </div>
    )
}

export default ResultSorting;