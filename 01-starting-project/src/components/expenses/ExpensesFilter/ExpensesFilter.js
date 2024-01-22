import React from 'react';

import './ExpensesFilter.css';
import { useState } from "react";


const ExpensesFilter = (props) => {
    const [userInput, setUserInput] = useState({
        filterValue: props.selectedYear || '2020'
    });

    const inputChangedEventHandler = (value) => {
        setUserInput((oldState) => {
            let newState = {...oldState};
            newState['filterValue'] = value;
            return newState;
        });
    }

    if(props.onFilterChanged){
        props.onFilterChanged(userInput.filterValue);
    }

    return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={(Event) => {inputChangedEventHandler(Event.target.value)}} value={props.selectedYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;