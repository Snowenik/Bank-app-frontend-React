import React, {useState} from "react";
import "../css/settings.css";
import avatar from "../imgs/avatar.png";



export default function LastNameModal(props) {


    const [lastName, setLastName] = useState("");


    function lastNameChange(event) {
        setLastName(event.target.value);
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
            <div className="lastNameModal">
                <div className="lastNameModalContent">
                    <div className="avatarContainer">
                        <img src={avatar} className="avatar" />
                    </div>

                    <div className="closeDiv">
                        <button type="button" onClick={() => props.setModal(false)}>X</button>
                    </div>

                    <div className="modalDiv">
                        <label>Nowe nazwisko</label>
                        <input type="text" value={lastName} onChange={lastNameChange} autoFocus maxLength="20" minLength="3" required />
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





































