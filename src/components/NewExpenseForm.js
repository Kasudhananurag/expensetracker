export default function NewExpenseForm() {
    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min={0.01} step={0.01} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" value={enteredDate} min="2021-01-01" onChange={dateChangeHandler} max={2022 - 12 - 31} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit" >Add-Expense</button>
            </div>
        </form>
    )
}