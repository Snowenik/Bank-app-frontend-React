import React, {useState, useEffect} from "react";
import "../css/user.css";
import tranfser from "../imgs/transferSecond.png";
import creqLib from "../clientRequests/creqLib";



export default function ModalWithdraw(props) {


    const [amount, setAmount] = useState("");
    const [user, setUser] = useState({});


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])





    function handleAmountChange(event) {
        setAmount(event.target.value);
    }



    function handleSubmitHelper() {
        creqLib.creqAccountWithdraw(user.login, amount, localStorage.getItem("jwt")).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(response.data);
            props.setModal(false);
            props.setSuccess(true);
        }).catch(error => props.setError(true))
    }




    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitHelper();
    }



    

    return (
        props.showModal ? (
        <form onSubmit={handleSubmit}>
            <div className="modalWithdraw">
                <div className="modalWithdrawContent">
                    <div className="transferContainer">
                        <img src={tranfser} className="transfer" />
                    </div>

                    <div className="manageCloseDiv">
                        <button type="button" onClick={() => props.setModal(false)}>X</button>
                    </div>
                    <div className="manageModalDiv">
                        <label>Kwota</label>
                        <input type="text" value={amount} onChange={handleAmountChange} autoFocus maxLength="40" minLength="1" required/>
                    </div>
                    <div className="manageModalDiv">
                        <input type="submit" value="Wykonaj"/>
                    </div>
                </div>
            </div>
        </form>
        ) : null
    )


}




























































