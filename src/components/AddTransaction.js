import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">{text}</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
