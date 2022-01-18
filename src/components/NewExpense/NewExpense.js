import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [addBtnClicked, setAddBtnClicked] = useState(false);

  const onClickAddBtnHandler = () => {
    setAddBtnClicked(true);
  };

  const cancelButtonHandler = () => {
    setAddBtnClicked(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setAddBtnClicked(false);
  };

  return (
    <div className='new-expense'>
      {!addBtnClicked && <button onClick={onClickAddBtnHandler}>Add New Expense</button>}
      {addBtnClicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelButton={cancelButtonHandler}/>}
    </div>
  );
};

export default NewExpense;
