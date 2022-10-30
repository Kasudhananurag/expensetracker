import "./Expenses.css"
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const fChnageHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onChangeFilter={fChnageHandler} />
                <ExpensesList items = {filteredExpenses} />
            </Card>
        </div>
    );
}