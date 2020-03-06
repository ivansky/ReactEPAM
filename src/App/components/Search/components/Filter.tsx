import React from 'react';
import Button from '../../common/Button'

type FilterProps = {
    options: string[];
    activeOption: string;
    handleSwitch: (e: React.MouseEvent) => void;
}
const Filter = (props: FilterProps) => {
  const setFilterOptions = props.options.map(
    (option, index) => {
      if (option === props.activeOption) return (<Button
        key = {index}
        content = {option}
        action = {props.handleSwitch}
        disabled = {true}
      />);
      return (<Button
        key = {index}
        content = {option}
        action = {props.handleSwitch}
      />);
    }
  );
  return (
      <>
        <h3>Sort by</h3>
        <div>  
          {setFilterOptions}
        </div>
      </>
  );
};

export default Filter;
