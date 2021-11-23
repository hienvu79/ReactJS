import React, { useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem";

var postApi = "https://jsonplaceholder.typicode.com/posts?page=1";

function App() {
  const [expenses, setExpenses] = useState();

  useEffect(() => {
    fetch(postApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (posts) {
        setExpenses(posts);
      });
    return null;
  }, []);

  return (
    <div>
      <h2>Let's get stated</h2>
      {expenses && expenses.map((expense)=>(<>
        <ExpenseItem
        title={expense.title}
        body={expense.body}
      />
      </>))}
      
    </div>
  );
}

export default App;
