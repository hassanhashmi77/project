import React, { createContext, useReducer } from "react";
import TransReducer from './UseReducer';


const StartingTransactions =
    [
        { desc: "Add Cash", amount: 500 },
    ]
export const TransactionContext = createContext(StartingTransactions);
export const GlobProvider = ({ children }) => {

    let [state, dispatch] = useReducer(TransReducer, StartingTransactions);

    function addInput(Savedata) {
        dispatch({
            type: Savedata.type,
            payload: {
                amount: Savedata.amount,
                desc: Savedata.desc

            },


        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addInput
        }}>
            {children}
        </TransactionContext.Provider>
    )
}