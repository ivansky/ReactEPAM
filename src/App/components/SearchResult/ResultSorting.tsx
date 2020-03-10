import React from 'react';
import Button from '../common/Button';
import './ResultSorting.scss';
type ResultSortingProps = {
    numberOfItems: number;
    sortingOptions: string[];
    activeOption: string;
    handleSwitchSorting: (e: React.MouseEvent) => void;
}

const ResultSorting = (props: ResultSortingProps) => {
    const setSortingOption = props.sortingOptions.map((option, index) =>
        <Button
            content = {option}
            key = {index}
            action = {props.handleSwitchSorting}
        />
    )
    return (
        <div className = 'sorting-container'>
            <div className = 'sorting'>
                <p  className = 'sorting-counter'>{props.numberOfItems} movies found</p>
                <div>
                    <h3 className = 'sorting-title'>Sort by</h3>
                    {setSortingOption}
                </div>
            </div>
        </div>
    )
}

export default ResultSorting;