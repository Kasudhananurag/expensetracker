import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";

export default function ExpenseItem(props) {

    return (
        <>
            <li>
                <Card className="expense-item" >
                    <ExpenseDate date={props.date}  ></ExpenseDate>
                    <div className="expense-item__description" ><h2>{props.title}</h2></div>
                    <div className="expense-item__price" >Rs.{props.amount}</div>
                    {/* <button onClick={clck} >Change Title</button> */}
                </Card>
            </li>
        </>
    );
}