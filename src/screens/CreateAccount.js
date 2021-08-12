import React, {useState} from "react";
import avatar from "../imgs/avatar.png";
import Modal from "../components/createModal";
import ModalError from "../components/ModalError";
import creqLib from "../clientRequests/creqLib";
import { useHistory } from "react-router-dom";
import LoadingModal from "../components/loadingModal";
import "../css/createAccount.css";




export default function CreateAccount(props) {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    const [errorModal, setErrorModal] = useState(false);
    const [isLoading, setLoading] = useState(false);


    const history = useHistory();



    function firstNameChange(event) {
        setFirstName(event.target.value);
    }


    function lastNameChange(event) {
        setLastName(event.target.value);
    }

    function loginChange(event) {
        setLogin(event.target.value);
    }

    function passwordChange(event) {
        setPassword(event.target.value);
    }

    function emailChange(event) {
        setEmail(event.target.value);
    }



    function handleSuccess() {
        setLoading(false);
        setMessage("Twoje konto zostalo utworzone pomyslnie, zostaniesz przekierowany");
        setShowModal(true);
        setTimeout(() => {
            history.push("/");
        }, 3000)
    }



    function handleError(error) {
        setLoading(false);
        setMessage(error.response.data.message);
        setErrorModal(true);
    }

    
    function handleSubmit(event) {
        event.preventDefault();
        // setShowModal(true);
        setLoading(true);
        creqLib.creqCreateNewAccount(firstName, lastName, login, password, email)
                                    .then(response => handleSuccess())
                                    .catch(error => handleError(error))


    }

    



    return (
        <form onSubmit={handleSubmit}>
            <Modal showModal={showModal} setShowModal={setShowModal} message={message}/>
            <ModalError showError={errorModal} setError={setErrorModal} message={message}/>
            <div className="imgContainer">
                <img src={avatar} className="avatar"/>
            </div>


            <div className="formContainer">
                <div className="inputDiv">
                    <label>Imie</label>
                    <input type="text" value={firstName} onChange={firstNameChange} autoFocus maxLength="20" minLength="3" required />
                </div>
                <div className="inputDiv">
                    <label>Nazwisko</label>
                    <input type="text" value={lastName} onChange={lastNameChange} maxLength="20" minLength="3" required />
                </div>
                <div className="inputDiv">
                    <label>Login</label>
                    <input type="text" value={login} onChange={loginChange} maxLength="20" minLength="3" required/>
                </div>
                <div className="inputDiv">
                    <label>Haslo</label>
                    <input type="password" value={password} onChange={passwordChange} maxLength="20" minLength="8" required placeholder="min 8 znakow"/>
                </div>
                <div className="inputDiv">
                    <label>Email</label>
                    <input type="text" value={email} onChange={emailChange} maxLength="40" minLength="3" required/>
                </div>
                <div className="inputDiv">
                    <input type="submit" value="Utworz konto"/>
                </div>
            </div>
        </form>
    )
}
























