import axios from "axios";
import {endpoints} from "../server/server";




export default function creqChangePassword(login, oldPassword, password, repeatedPassword, token) {
    return axios.post(endpoints.creqChangePasswordURL, {
        login: login,
        oldPassword: oldPassword,
        password: password,
        repeatedPassword: repeatedPassword
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
















