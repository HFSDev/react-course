import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

    return(
        <div className='new-expense'>
            <ExpenseForm onNewExpenseCreated={props.onNewExpenseCreated}/>            
        </div>

    );

}

export default NewExpense;