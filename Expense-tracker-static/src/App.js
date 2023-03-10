
import Expenses from "./components/Expenses";


function App() {
  //this array is consuming objects whic be are using to pass data by using reacts props
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  // short method for iterating over expenses
  // // const expensess=expenses.map((item,id)=>{
  //   return (
  //     <div key={id}><ExpenseItem 
  //     title={item.title}
  //     amount={item.amount}
  //     date={item.date}
  //   />

  //     </div>
  //   )
  // });
  // return expensess;
  return (
    <div className="App">
       <Expenses items={expenses} />
    </div>
  );
}

export default App;
