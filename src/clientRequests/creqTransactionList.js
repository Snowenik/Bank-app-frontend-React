import axios from "axios";
import {endpoints} from "../server/server";



export default function creqTransactionList(login, token) {
    console.log(login)
    return axios.post(endpoints.creqTransactionListURL, {
        login: login
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}






















