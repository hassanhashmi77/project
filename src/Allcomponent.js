import React, { useContext, useState } from 'react';
import { TransactionContext } from './hookuse/UseContext';

function Allcomponent() {

    let { transactions, addInput } = useContext(TransactionContext);
    let [AddDesc, setAddDesc] = useState("");
    let [AddAmount, setAddAmount] = useState();



    const AdditionEvent = (event) => {
        event.preventDefault();


        addInput({
            type: "ADD",
            amount: Number(AddAmount),
            desc: AddDesc
        });
        setAddDesc('');
        setAddAmount(0)
    }

    const AddIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const AddExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="maincontainer">
            <div className="container">
                <h2 className="textcenter">Expense Tracker App</h2>
                <div className="textcentera">
                    <h3> Your Balance remaining<br /> ${AddIncome() + AddExpense()}</h3>
                </div>


                <div className="expcontainer">
                    <h4>INCOME <br /> ${AddIncome()}</h4>
                    <h4>EXPENSE <br /> ${AddExpense()}</h4>
                </div>

                <h4>History</h4>
                <ul className="trnslist">

                    {transactions.map((obj, id) => {
                        return (
                            <li key={id}>
                                <span>{obj.desc}</span>
                                <span>${obj.amount}</span>


                            </li>
                        )
                    })}

                </ul>

                <h4>Add new transaction</h4>
                <form className="transform" onSubmit={AdditionEvent}>

                    <label>
                        Enter Text <br />
                        <input type="text" value={AddDesc} placeholder="Add Text" onChange={(ev) => setAddDesc(ev.target.value)} required />
                    </label>

                    <br />

                    <label>
                        Enter Amount <br />
                        <input type="number" value={AddAmount} placeholder="Add Amount" onChange={(ev) => setAddAmount(ev.target.value)} required />
                    </label>

                    <br />

                    <input type="submit" value="Add Transaction" />
                </form>
            </div>
        </div>
    );
}

export default Allcomponent;
