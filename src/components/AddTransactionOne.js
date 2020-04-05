
/*
    Added Ref concept to help avoid unnecessary re-renders
*/
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {

    // const [text, setText] = useState('')
    const [id, setId] = useState(0)
    // const [amount, setAmount] = useState(0)

    //Refs 
    const textRef = React.createRef()
    let amountRef = null
    const setAmountRef = element => {
        amountRef = element
    }

    const { transactions, addTransaction } = useContext(GlobalContext)
    console.log("From AddTransaction comp : ", transactions)

    //onSubit handler
    const onSubmit = e => {

        //prevent Default behaviour
        e.preventDefault()

        const text = textRef.current.value

        let amount;
        if (amountRef) {
            amount = amountRef.value
        }


        const transaction = {
            id: id,
            text,
            amount: +amount
        }
        setId(id + 1);

        //action dispatch
        addTransaction(transaction)
    }

    return (
        <>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>

                    <input type="text" placeholder="Enter text"
                        ref={textRef} />

                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br />
                        (negative - expense, positive - income )
                    </label>

                    <input type="number" placeholder="Enter Amount..."
                        ref={setAmountRef} />

                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default React.memo(AddTransaction)
