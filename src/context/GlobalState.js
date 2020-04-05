import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//state management 
const initialState = {
    transactions: []
}

//create Context 
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //delete Transaction generator 
    const deleteTransaction =  id => {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        }) 
    }

    //add Transaction Generator
    const addTransaction = transaction => {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        })
    }

    return (<GlobalContext.Provider value={
        {transactions : state.transactions,
        deleteTransaction, 
        addTransaction}
        }>
        { children }
    </GlobalContext.Provider>)
}

