import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../../general/Card/Card';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  console.log(`Initialising with [${filteredYear}]`);
  
  const expensesFilterChanged = (selectedYear) => {
    console.log(`Filter value: [${selectedYear}].`);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onFilterChanged={expensesFilterChanged} selectedYear={filteredYear} />
        <ExpenseItem
          date={props.expenses[0].date}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          />
        <ExpenseItem
          date={props.expenses[1].date}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          />
        <ExpenseItem
          date={props.expenses[2].date}
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          />
      </Card>
    </div>
  );
}

export default Expenses;
