import React, {useState} from "react";
import "../css/settings.css";
import avatar from "../imgs/avatar.png";



export default function FirstNameModal(props) {


    const [firstName, setFirstName] = useState("");


    function firstNameChange(event) {
        setFirstName(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        props.setModal(false);
        props.setSuccess(true);
        // props.setError(true);
    }


    return (
        props.showModal ? (
        <form onSubmit={handleSubmit}>
            <div className="firstNameModal">
                <div className="firstNameModalContent">
                    <div className="avatarContainer">
                        <img src={avatar} className="avatar"/>
                    </div>

                    <div className="closeDiv">
                        <button type="button" onClick={() => props.setModal(false)}>X</button>
                    </div>

                    <div className="modalDiv">
                        <label>Nowe imie</label>
                        <input type="text" value={firstName} onChange={firstNameChange} autoFocus maxLength="20" minLength="3" required/>
                    </div>
                    <div className="modalDiv">
                        <input type="submit" value="Wykonaj"/>
                    </div>
                </div>
            </div>
        </form>
        ) : null
    )
}










































