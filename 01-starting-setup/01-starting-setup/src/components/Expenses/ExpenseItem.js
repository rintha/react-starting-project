import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function deleteExpenseHandler (){

}
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <div className="del-expense">
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
