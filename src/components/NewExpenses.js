import "./NewExpenses.css";
import ExpenseForm from "./ExxpenseForm";
import { useState } from "react";

export default function NewExpenses(props) {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            date: new Date(enteredExpenseData.date),
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (<div className="new-expense">
        { !isEditing && <button onClick={ startEditingHandler } >Add New Expense</button> }
        { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler} /> }
    </div>);
}