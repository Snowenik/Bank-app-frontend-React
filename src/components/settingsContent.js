import React, {useState, useEffect} from "react";
import "../css/settings.css";
import avatar from "../imgs/avatar.png";
import FirstNameModal from "../components/settingsFirstNameModal";
import LastNameModal from "../components/settingsLastNameModal";
import LoginModal from "../components/settingsLoginModal";
import PasswordModal from "../components/settingsPasswordModal";
import EmailModal from "../components/settingsEmailModal";
import ModalSuccess from "../components/settingsSuccess";
import ModalError from "../components/settingsError";
    


export default function Content(props) {


    const [firstNameModal, setFirstNameModal] = useState(false);
    const [lastNameModal, setLastNameModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);
    const [emailModal, setEmailModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({});




    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, [])




    return (
        <>
        <FirstNameModal 
            showModal={firstNameModal} 
            setModal={setFirstNameModal} 
            showSuccess={modalSuccess} 
            setSuccess={setModalSuccess} 
            showError={modalError} 
            setError={setModalError}
        />
        <LastNameModal 
            showModal={lastNameModal} 
            setModal={setLastNameModal} 
            showSuccess={modalSuccess} 
            setSuccess={setModalSuccess} 
            showError={modalError} 
            setError={setModalError}
        />
        <LoginModal 
            showModal={loginModal} 
            setModal={setLoginModal} 
            showSuccess={modalSuccess} 
            setSuccess={setModalSuccess} 
            showError={modalError} 
            setError={setModalError}
        />
        <PasswordModal 
            showModal={passwordModal} 
            setModal={setPasswordModal} 
            showSuccess={modalSuccess} 
            setSuccess={setModalSuccess} 
            showError={modalError} 
            setError={setModalError}
            setMessage={setMessage}
        />
        <EmailModal 
            showModal={emailModal} 
            setModal={setEmailModal} 
            showSuccess={modalSuccess} 
            setSuccess={setModalSuccess} 
            showError={modalError} 
            setError={setModalError}
            setMessage={setMessage}
            setUser={setUser}
        />
        <ModalSuccess 
            showSuccess={modalSuccess} 
            setModalSuccess={setModalSuccess}
            message={message}
        />
        <ModalError 
            showError={modalError} 
            setError={setModalError} 
            message={message}
        />
        <div className="settingsContainer">
            <div className="avatarContainer">
                <img src={avatar} className="avatar"/>
            </div>
            <div className="infoContainer">
                <div className="infoDiv">
                    <div>
                        <p className="label">Imie</p>
                    </div>
                    <div>
                        <p>{user.firstName}</p>
                    </div>
                    {/* <div>
                        <button type="button" onClick={() => setFirstNameModal(true)}>Zmien</button>
                    </div> */}
                </div>
                <div className="infoDiv">
                    <div>
                        <p className="label">Nazwisko</p>
                    </div>
                    <div>
                        <p>{user.lastName}</p>
                    </div>
                    {/* <div>
                        <button type="button" onClick={() => setLastNameModal(true)}>Zmien</button>
                    </div> */}
                </div>
                <div className="infoDiv">
                    <div>
                        <p className="label">Login</p>
                    </div>
                    <div>
                        <p>{user.login}</p>
                    </div>
                    {/* <div>
                        <button type="button" onClick={() => setLoginModal(true)}>Zmien</button>
                    </div> */}
                </div>
                <div className="infoDiv">
                    <div>
                        <p className="label">Haslo</p>
                    </div>
                    <div>
                        <p>*******</p>
                    </div>
                    <div>
                        <button type="button" onClick={() => setPasswordModal(true)}>Zmien</button>
                    </div>
                </div>
                <div className="infoDiv">
                    <div>
                        <p className="label">E-mail</p>
                    </div>
                    <div>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <button type="button" onClick={() => setEmailModal(true)}>Zmien</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}


































