import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: 'bp1',
      title: "Toilet Paper",
      amount: 123.54,
      date: new Date(2021, 11, 22),
    },
    { 
      id: 'bp2',
      title: "Car Insurance", 
      amount: 253.54, 
      date: new Date(2021, 1, 2),
    },
    { 
      id: 'bp3',
      title: "Sugar",
      amount: 300.54, 
      date: new Date(2021, 3, 4),
    },
    { 
      id: 'bp4',
      title: "Salt",
      amount: 74.54,
      date: new Date(2021, 6, 22),
    },
  ];
  return (
    <div>
      <h2>Let's get stated</h2>
      <ExpenseItem 
        title={expense[0].title} 
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem  
        title={expense[1].title} 
        amount={expense[1].amount}
        date={expense[1].date}/>
      <ExpenseItem  
        title={expense[2].title} 
        amount={expense[2].amount}
        date={expense[2].date}/>
      <ExpenseItem  
        title={expense[3].title} 
        amount={expense[3].amount}
        date={expense[3].date}/>
    </div>
  );
}

export default App;
