import React from 'react';
import Button from '../../common/Button'

type FilterProps = {
    options: string[];
    activeOption: string;
    handleSwitch: (e: React.MouseEvent) => void;
}

const Filter = (props: FilterProps) => {
  return (
      <>
        <h3>Sort by</h3>
        <div>  
          {
            props.options.map(
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
            )
          }
        </div>
      </>
  );
};

export default Filter;
