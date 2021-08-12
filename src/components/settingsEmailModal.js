import React, {useState, useEffect} from "react";
import "../css/settings.css";
import avatar from "../imgs/avatar.png";
import creqLib from "../clientRequests/creqLib";



export default function EmailModal(props) {


    const [email, setEmail] = useState("");
    const [user, setUser] = useState({});



    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])




    function emailChange(event) {
        setEmail(event.target.value);
    }



    function handleSubmitHelper() {
        creqLib.creqChangeEmail(user.login, email, localStorage.getItem("jwt")).then(response => {
            props.setUser(response.data)
            props.setMessage("Twoj email zostal pomyslnie zaktualizowany");
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
            <div className="emailModal">
                <div className="emailModalContent">
                    <div className="avatarContainer">
                        <img src={avatar} className="avatar" />
                    </div>

                    <div className="closeDiv">
                        <button type="button" onClick={() => props.setModal(false)}>X</button>
                    </div>

                    <div className="modalDiv">
                        <label>Nowy e-mail</label>
                        <input type="text" value={email} onChange={emailChange} autoFocus maxLength="40" minLength="3" required />
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





































