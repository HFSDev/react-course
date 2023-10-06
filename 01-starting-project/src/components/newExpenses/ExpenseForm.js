import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const inputChangedEventHandler = (componentId, value) => {
        setUserInput((oldState) => {
            let newState = {...oldState};
            newState[componentId] = value;
            return newState;
        });
    }

    const addNewExpenseBtnClickHandler = (event) => {
        console.log(`Title[${userInput.title}], Amount[${userInput.amount}] and Date[${userInput.date}].`);
    }

    const onSubmitHangler = (event) => {
        event.preventDefault();

        const formData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date)
        };

        console.log(formData);

        if(props.onNewExpenseCreated){
            props.onNewExpenseCreated(formData);
        }

        setUserInput((oldState) => {
            return {
                title: '',
                amount: 0,
                date: ''
            };
        });
    }

    return (
        <form onSubmit={onSubmitHangler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={(event)=>{inputChangedEventHandler('title', event.target.value);}}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.00" step="0.01" value={userInput.amount} onChange={(event)=>{inputChangedEventHandler('amount', event.target.value);}}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={userInput.date} onChange={(event)=>{inputChangedEventHandler('date', event.target.value);}}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={addNewExpenseBtnClickHandler}>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;