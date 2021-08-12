import React, {useState} from "react";
import "../css/login.css";
import loginIcon from "../imgs/login.png";
import ModalError from "../components/loginError";
import ModalSuccess from "../components/ModalSuccess";
import creqLib from "../clientRequests/creqLib";
import { useHistory } from "react-router-dom";
import LoadingModal from "../components/loadingModal";



export default function Login(props) {


    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setError] = useState(false);
    const [showSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);


    const history = useHistory();



    function handleLoginChange(event) {
        setLogin(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }


    function handleSuccess() {

    }


    function handleSubmitHelper() {
        setLoading(true);
        creqLib.creqLogin(login, password).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data))
            setLoading(false);
            creqLib.creqAuthenticate(login, password).then(response => {
                localStorage.setItem("jwt", response.data.jwt);
                localStorage.setItem("loggedIn", true);
                setMessage("Zalogowano pomyslnie, zostaniesz przekierowany");
                setSuccess(true);
                setTimeout(() => {history.push("/user");}, 3000);
            })
        }).catch(error => {setMessage(error.response.data.message); setLoading(false); setError(true)})
    }


    
    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitHelper();
    }




    return (
        <form onSubmit={handleSubmit}>
            {isLoading ? <LoadingModal/> : null}
            <ModalError showError={showError} setError={setError} message={message}/>
            <ModalSuccess showSuccess={showSuccess} setSuccess={setSuccess} message={message}/>
            <div className="loginContainer">
                <img src={loginIcon} className="login"/>
            </div>


            <div className="formContainer">
                <div>
                    <label>Login</label>
                    <input type="text" value={login} onChange={handleLoginChange} autoFocus maxLength="30" minLength="3" required/>
                </div>
                <div>
                    <label>Haslo</label>
                    <input type="password" value={password} onChange={handlePasswordChange} maxLength="30" minLength="8" placeholder="min. 8 znakow" required/>
                </div>
                <div>
                    <input type="submit" value="Zaloguj"/>
                </div>
            </div>
        </form>
    )

}

































