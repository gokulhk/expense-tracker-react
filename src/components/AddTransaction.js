import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {

    const [text, setText] = useState('')
    const [id, setId] = useState(0)
    const [amount, setAmount] = useState(0)

    const { transactions, addTransaction } = useContext(GlobalContext)
    console.log("From AddTransaction comp : ",transactions)

    //onSubit handler
    const onSubmit = e => {

        //prevent Default behaviour
        e.preventDefault()

        const transaction =  {
            id : id,
            text,
            amount : +amount
        }
        setId(id+1);

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
                    value={text} onChange={ e => setText(e.target.value)} />

                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br />
                        (negative - expense, positive - income )
                    </label>

                    <input type="number" placeholder="Enter Amount..."
                    value={amount} onChange={e => setAmount(e.target.value)} />

                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default React.memo(AddTransaction)
