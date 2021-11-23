import React, { useState, useEffect } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
 
  return (
    <div className="col" id="single-post">
      <div className="col-3 expense-item">
        {props.title}
      </div>
      <div className="col-3 expense-item__des">
        {props.body}
      </div>
    </div>
  );
}

export default ExpenseItem;
