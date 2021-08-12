import React, {useState, useEffect} from "react";
import "../css/transfer.css";
import Modal from "../components/transferModal";
import ModalSuccess from "./transferSuccess";
import ModalError from "../components/transferError";


export default function Content(props) {


    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({});
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [message, setMessage] = useState("");



    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, [])




    return (
        <>
        <Modal showModal={showModal} 
            setShowModal={setShowModal} 
            showSuccess={modalSuccess} 
            setSuccess={setModalSuccess} 
            showError={modalError} 
            setError={setModalError} 
            setMessage={setMessage}
        />
        <ModalSuccess showSuccess={modalSuccess} setSuccess={setModalSuccess}/>
        <ModalError showError={modalError} setError={setModalError} message={message}/>
        <div className="transferContentContainer">
            <div>
                <p>Twoj stan konta aktualnie wynosi</p>
                <p>{user.amount}zl</p>
            </div>
            <div>
                <button type="button" onClick={() => setShowModal(true)}>Wykonaj przelew</button>
            </div>
        </div>
        </>
    )
}





























