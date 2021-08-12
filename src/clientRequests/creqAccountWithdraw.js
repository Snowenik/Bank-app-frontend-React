import axios from "axios";
import {endpoints} from "../server/server";




export default function creqAccountWithdraw(login, amount, token) {
    return axios.post(endpoints.creqAccountWithdrawURL, {
        login: login,
        amount: amount
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}























