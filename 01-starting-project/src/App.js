import Expenses from './components/expenses/Expenses/Expenses';
import NewExpense from './components/newExpenses/NewExpense';

function App() {
  let expenses = [
    {date: new Date(2023, 9, 2), title: "Keychron V10 Alice", amount: 97.5},
    {date: new Date(2023, 9, 1), title: "Wicca Book", amount: 35.67},
    {date: new Date(2023, 9, 1), title: "Graphite Pencil", amount: 30.1}
  ];

  const onNewExpenseCreated = (newExpense) => {
    expenses.push(newExpense);
  }

  return (
    <div>
      <NewExpense onNewExpenseCreated={onNewExpenseCreated}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
