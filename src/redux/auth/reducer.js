import { Cookie } from "@mui/icons-material"
import Cookies from "universal-cookie"
import * as types from "./actionType.js"

const cookie = new Cookies()
const loggedUser = cookie.get("loggedUser") || undefined
let inistate = {
    isAuth : loggedUser ? true : false,
    userData : loggedUser == undefined ? {} : loggedUser
}

export const Authreducer = (state = inistate, { type, payload }) => {
    switch(type){
        case types.isAuth : {
            return { ...state, isAuth: payload }
        }
        case types.Save_User : {
            return {
                ...state, userData: payload
            }
        }
        case types.Logout_User : {
            return{ ...state, userData:{} }
        }
        case types.UpadteUser : {
            return {...state, userData :payload}
        }
        default :{
            return state
        } 
    }
}