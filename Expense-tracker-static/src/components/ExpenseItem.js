import "./assets/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "./Cards";

// const expenseData=[
//     {
//     title:"Car Insurance",
//     price:244
//     },
//     {
//         title:"Bike Insurance",
//         price:2479
//     },
//     {
//         title:"freeze ",
//         price:24233
//     }

// ]

function ExpenseItem(props) {
  
  // const showExpense=expenseData.map((item,index)=>{
  //     return(
  //          <div className="expense-item" key={index}>
  //     <div>{}</div>
  //     <div className="expense-item__description">
  //         <h2>{item.title}</h2>
  //         <div className="expense-item__price">Rs{item.price}/ only</div>
  //     </div>
  // </div>)
  // });

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs.{props.amount}/ only</div>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
