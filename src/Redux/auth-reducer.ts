import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type setUsersDataActionType = ReturnType<typeof setUsersDataActionCreator>

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

export type AuthActionsType = setUsersDataActionType

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
