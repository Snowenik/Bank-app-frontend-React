import axios from "axios";
import {endpoints} from "../server/server";




export default function creqChangeEmail(login, email, token) {
    return axios.post(endpoints.creqChangeEmailURL, {
        login: login,
        email: email
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}























