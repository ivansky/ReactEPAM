import React from 'react';
import Button from '../../common/Button'

type FilterProps = {
    optionOne: string;
    optionTwo: string;
    activeOption: string;
    handleSwitch: () => void;
}

const Filter = (props: FilterProps) => {
  return (
      <>
        <h3>Sort by</h3>
        <div>
            <Button content = {props.optionOne} action = {props.handleSwitch} />
            <Button content = {props.optionTwo} action = {props.handleSwitch} />
        </div>
      </>
  );
};

export default Filter;
