import axios from "axios";
import {endpoints} from "../server/server";





export default function creqAccountDeposit(login, amount, token) {
    return axios.post(endpoints.creqAccountDepositURL, {        
        login: login,
        amount: amount
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
























