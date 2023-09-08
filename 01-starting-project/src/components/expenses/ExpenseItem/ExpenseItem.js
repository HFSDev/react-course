import './ExpenseItem.css';
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from '../../general/Card/Card';
import { useState } from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const btnClickHandler = () => {
    setTitle("Updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={btnClickHandler}>Click Me!</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
