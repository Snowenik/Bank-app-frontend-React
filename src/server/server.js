




export const port = "8080"



export const baseURL = `http://localhost:${port}/api`;




export const endpoints = {
    creqCreateNewAccountURL: baseURL + "/user/create",
    creqLoginURL: baseURL + "/user/login",
    creqAuthenticateURL: baseURL + "/authenticate",
    creqAccountDepositURL: baseURL + "/user/account/deposit",
    creqAccountWithdrawURL: baseURL + "/user/account/withdraw",
    creqAccountTransactionURL: baseURL + "/user/account/transaction",
    creqTransactionListURL: baseURL + "/user/account/transaction/list",
    creqChangePasswordURL: baseURL + "/user/settings/change/password",
    creqChangeEmailURL: baseURL + "/user/settings/change/email"

    
}






















