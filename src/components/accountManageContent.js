import React, {useState, useEffect} from "react";
import "../css/user.css";
import ModalDeposit from "../components/accountManageDeposit";
import ModalWithdraw from "../components/accountManageWithdraw";
import ModalSuccess from "../components/accountManageSuccess";
import ModalErorr from "../components/accountManageError";




export default function Content(props) {


    const [modalDeposit, setModalDeposit] = useState(false);
    const [modalWithdraw, setModalWithdraw] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalSuccessMessage, setModalSuccessMessage] = useState("");
    const [modalError, setModalError] = useState(false);
    const [modalErrorMessage, setModalErrorMessage] = useState("");
    const [user, setUser] = useState({});


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])


    
    
    return (
        <div>
            <ModalDeposit 
                showModal={modalDeposit} 
                setModal={setModalDeposit} 
                showSuccess={modalSuccess} 
                setSuccess={setModalSuccess} 
                showError={modalError} 
                setError={setModalError}
            />
            <ModalWithdraw 
                showModal={modalWithdraw} 
                setModal={setModalWithdraw} 
                showSuccess={modalSuccess} 
                setSuccess={setModalSuccess} 
                showError={modalError} 
                setError={setModalError}
            />
            <ModalSuccess 
                showSuccess={modalSuccess} 
                setSuccess={setModalSuccess} 
                message={modalSuccessMessage}
            />
            <ModalErorr 
                showError={modalError} 
                setError={setModalError} 
                message={modalErrorMessage}
            />
            <div className="accountManageContainer">
                <div className="accountManageInfoContainer">
                    <p className="firstP">Panel zarzadzania kontem bankowym</p>
                </div>
                <div className="accountManageButtons">
                    <div>
                        <button type="button" 
                            onClick={() => {setModalSuccessMessage("Twoja wplata zostala zrealizowana pomyslnie"); setModalErrorMessage("Wystapil blad w trakcie przetwarzania operacji"); setModalDeposit(true)}}>Wplac na konto
                        </button>
                    </div>
                    <div>
                        <button type="button" 
                            onClick={() => {setModalSuccessMessage("Twoja wyplata zostala zrealizowana pomyslnie"); setModalErrorMessage("Wystapil blad w trakcie przetwarzania operacji"); setModalWithdraw(true)}}>Wyplac z konta
                        </button>
                    </div>
                    <div>
                        <p>Twoje obecne saldo wynosi:</p>
                        <p>{user.amount}zl</p>
                    </div>
                </div>
            </div>
        </div>
    )

}





























