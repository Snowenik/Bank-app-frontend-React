import React, {useState, useEffect, useRef} from "react";
import "../css/transaction.css";
import creqLib from "../clientRequests/creqLib";
import Loading from "../components/loading";



export default function Content(props) {


    // const ids = [];
    // const numbers = [];
    // const values = [];
    // const descriptions = [];
    // const types = [];
    // const dates = [];



    const [user, setUser] = useState({});
    const [ids, setIds] = useState([]);
    const [accountNumbers, setAccountNumbers] = useState([]);
    const [values, setValues] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [types, setTypes] = useState([]);
    const [dates, setDates] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const isInitialMount = useRef(true)
    const [isLoading, setLoading]  = useState(false);



    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])



    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            setLoading(true);
            creqLib.creqTransactionList(user.login, localStorage.getItem("jwt")).then(response => {
                setTransactions(response.data);
                setLoading(false);
            }).catch(error => alert(error.data))
            console.log("Inside useEffect: " + user.login)    
        }
    }, [user])




    useEffect(() => {
        transactions.map(transaction => {
            ids.push(transaction.id);
            accountNumbers.push(transaction.accountNumber);
            values.push(transaction.amount);
            types.push(transaction.transactionType === "OUT" ? "Wychodzacy" : "Przychodzacy");
            descriptions.push(transaction.description);
            dates.push(transaction.date.substr(0, 10));
        })    
    }, [transactions])







    // for(let i = 0; i < 50; i++) {
    //     ids.push("32423423");
    //     accountNumbers.push("3454546346366");
    //     values.push("300");
    //     descriptions.push("abeabab baebfabea abeabfeb abeabeba");
    //     types.push("Przychodzacy");
    //     dates.push("01.08.2021");
    // }





    return (
        <>
            {isLoading ? <Loading/> : null}
            <div className="contentContainer">
                <div>
                    <p>ID</p>
                    <ul>
                        {ids.map(id => <li key={id}>{id}</li>)}
                    </ul>
                </div>
                <div>
                    <p>Numer rachunku</p>
                    <ul>
                        {accountNumbers.map(number => <li key={number}>{number}</li>)}
                    </ul>
                </div>
                <div>
                    <p>Kwota</p>
                    <ul>
                        {values.map(value => <li key={value}>{value}</li>)}
                    </ul>
                </div>
                <div>
                    <p>Typ</p>
                    <ul>
                        {types.map(type => <li key={type}>{type}</li>)}
                    </ul>
                </div>
                <div>
                    <p>Opis</p>
                    <ul>
                        {descriptions.map(description => <li key={description}>{description}</li>)}
                    </ul>
                </div>
                <div>
                    <p>Data</p>
                    <ul>
                        {dates.map(date => <li key={date}>{date}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )

}






























