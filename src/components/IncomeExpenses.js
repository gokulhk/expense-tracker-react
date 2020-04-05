import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function IncomeExpenses() {

    const { transactions } = useContext(GlobalContext)

    //extract only amounts into an array
    const amount = transactions.map(transaction => transaction.amount)

    //income
    const income = amount
    .filter( amount => amount >= 0 )
    .reduce( (acc, item) => (acc += item) , 0)
    .toFixed(2)

     //expense
     const expense = amount
     .filter( amount => amount < 0 )
     .reduce( (acc, item) => (acc += item) , 0)
     .toFixed(2)   


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
