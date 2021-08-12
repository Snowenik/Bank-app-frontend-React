import React, {useState, useEffect} from "react";
import "../css/settings.css";
import avatar from "../imgs/avatar.png";
import creqLib from "../clientRequests/creqLib";
import { useRef } from "react/cjs/react.development";



export default function PasswordModal(props) {


    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [user, setUser] = useState({});


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])






    function passwordChange(event) {
        setPassword(event.target.value);
    }


    function oldPasswordChange(event) {
        setOldPassword(event.target.value);
    }


    function repeatedPasswordChange(event) {
        setRepeatedPassword(event.target.value);
    }



    function handleSubmitHelper() {
        creqLib.creqChangePassword(user.login, oldPassword, password, repeatedPassword, localStorage.getItem("jwt")).then(response => {
            props.setMessage("Pomyslnie zmieniono haslo");
            props.setModal(false);
            props.setSuccess(true);
        }).catch(error => {props.setMessage(error.response.data.message); props.setModal(false); props.setError(true)})
    }



    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitHelper();
    }



    return (
        props.showModal ? (
        <form onSubmit={handleSubmit}>
            <div className="passwordModal">
                <div className="passwordModalContent">
                    <div className="avatarContainer">
                        <img src={avatar} className="avatar" />
                    </div>

                    <div className="closeDiv">
                        <button type="button" onClick={() => props.setModal(false)}>X</button>
                    </div>

                    <div className="modalDiv">
                        <label>Stare haslo</label>
                        <input type="password" value={oldPassword} onChange={oldPasswordChange} autoFocus maxLength="20" minLength="8" required placeholder="min. 8 znakow"/>
                    </div>

                    <div className="modalDiv">
                        <label>Nowe haslo</label>
                        <input type="password" value={password} onChange={passwordChange} maxLength="20" minLength="8" required placeholder="min. 8 znakow" />
                    </div>

                    <div className="modalDiv">
                        <label>Powtorz haslo</label>
                        <input type="password" value={repeatedPassword} onChange={repeatedPasswordChange} maxLength="20" minLength="8" required placeholder="min. 8 znakow"/>
                    </div>

                    <div className="modalDiv">
                        <input type="submit" value="Wykonaj" />
                    </div>
                </div>
            </div>
        </form>
        ) : null

    )


}
































