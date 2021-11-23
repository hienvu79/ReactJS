import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    return (
    <div className="col">
      <div className="col-3 expense-item">
        <ExpenseDate date={props.date}/>
      </div>
      <div className="col-3 expense-item__des">{props.title}</div>
      <div className="col-3">
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
