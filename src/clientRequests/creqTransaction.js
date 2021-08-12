import axios from "axios";
import {endpoints} from "../server/server";




export default function creqTransaction(senderAccountNumber, receiverAccountNumber, amount, description, token) {
    return axios.post(endpoints.creqAccountTransactionURL, {
        senderAccountNumber: senderAccountNumber,
        receiverAccountNumber: receiverAccountNumber,
        amount: amount,
        description: description
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}























