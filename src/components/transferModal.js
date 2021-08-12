import React, {useState, useEffect} from "react";
import "../css/transfer.css";
import image from "../imgs/transferSecond.png";
import creqLib from "../clientRequests/creqLib";



export default function Modal(props) {


    const [accountNumber, setAccountNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState({});



    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])




    function accountNumberChange(event) {
        setAccountNumber(event.target.value);
    }

    function amountChange(event) {
        setAmount(event.target.value);
    }

    function descriptionChange(event) {
        setDescription(event.target.value);
    }



    function handleSubmitHelper() {
        creqLib.creqAccountTransaction(user.accountNumber, accountNumber, amount, description, localStorage.getItem("jwt")).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(response.data);
            props.setShowModal(false);
            props.setSuccess(true);
        }).catch(error => {props.setMessage(error.response.data.message); props.setError(true)})
    }




    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitHelper();
    }


    

    return (
        props.showModal ? (           
        <form onSubmit={handleSubmit}>
                <div className="modal">
                    <div className="modalContent">
                        <div className="imageContainer">
                            <img src={image} className="image" />
                        </div>

                        <div className="transferCloseDiv">
                            <button type="button" onClick={() => props.setShowModal(false)}>X</button>
                        </div>

                        <div className="modalDivs">
                            <label>Numer konta</label>
                            <input type="text" value={accountNumber} onChange={accountNumberChange} autoFocus maxLength="20" minLength="3" required/>
                        </div>
                        <div className="modalDivs">
                            <label>Kwota</label>
                            <input type="text" value={amount} onChange={amountChange} maxLength="20" minLength="1" required/>
                        </div>
                        <div className="modalDivs">
                            <label>Opis</label>
                            <input type="text" value={description} onChange={descriptionChange} maxLength="100" minLength="3" required/>
                        </div>
                        <div className="modalDivs">
                            <input type="submit" value="Wykonaj"/>
                        </div>
                    </div>
                </div>
        </form>
        ) : null
    )
}


























