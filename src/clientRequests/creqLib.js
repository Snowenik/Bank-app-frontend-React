import creqCreateNewAccount from "../clientRequests/creqCreateNewAccount";
import creqLogin from "../clientRequests/creqLogin";
import creqAuthenticate from "../clientRequests/creqAuthenticate";
import creqAccountDeposit from "../clientRequests/creqAccountDeposit";
import creqAccountWithdraw from "../clientRequests/creqAccountWithdraw";
import creqAccountTransaction from "../clientRequests/creqTransaction";
import creqTransactionList from "../clientRequests/creqTransactionList";
import creqChangePassword from "../clientRequests/creqChangePassword";
import creqChangeEmail from "../clientRequests/creqChangeEmail";



const creqLib = {
    creqCreateNewAccount: creqCreateNewAccount,
    creqLogin: creqLogin,
    creqAuthenticate: creqAuthenticate,
    creqAccountDeposit: creqAccountDeposit,
    creqAccountWithdraw: creqAccountWithdraw,
    creqAccountTransaction: creqAccountTransaction,
    creqTransactionList: creqTransactionList,
    creqChangePassword: creqChangePassword,
    creqChangeEmail: creqChangeEmail
}



export default creqLib;






























