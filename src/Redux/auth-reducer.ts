import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type SetUsersDataActionType = ReturnType<typeof setUsersDataActionCreator>
export type SignInActionCreatorType = ReturnType<typeof signInActionCreator>

export type AuthDataType = {
    id: number
    email: string
    login: string
}

const initialState: InitialAuthStateType = {
    data: {
        id: 0,
        email: "",
        login: ""
    },
    isAuth: false
}

export type InitialAuthStateType = {
    data: AuthDataType,
    isAuth: boolean
}

const SETUSERDATA = 'SET-USER-DATA'
const SIGNIN = 'SIGN-IN'

export type AuthActionsType = SetUsersDataActionType | SignInActionCreatorType

export const authReducer = (state: InitialAuthStateType = initialState, action: AuthActionsType): InitialAuthStateType => {
    switch (action.type) {
        case SETUSERDATA:
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        default:
            return state
    }
}

export const setUsersDataActionCreator = (data: AuthDataType) => ({type: SETUSERDATA, data: data} as const)
export const signInActionCreator = (userId: number) => ({type: SIGNIN, userId: userId} as const)

export const setUserData = () => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUsersDataActionCreator(data.data))
                }
            })
    }
}


export const signIn = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.signIn(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    debugger
                    dispatch(signInActionCreator(data.data.userId))
                }
            })
    }
}