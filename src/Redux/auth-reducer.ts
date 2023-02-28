import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type SetUsersDataActionType = ReturnType<typeof setUsersDataActionCreator>

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type InitialAuthStateType = {
    payload: AuthDataType,
    isAuth: boolean
}

const initialState: InitialAuthStateType = {
    payload: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}


const SETUSERDATA = 'SET-USER-DATA'

export type AuthActionsType = SetUsersDataActionType

export const authReducer = (state: InitialAuthStateType = initialState, action: AuthActionsType): InitialAuthStateType => {
    switch (action.type) {
        case SETUSERDATA:
            return {
                ...state,
                payload: {
                    id: action.payload.id,
                    email: action.payload.email,
                    login: action.payload.login,
                },
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setUsersDataActionCreator = (payload: AuthDataType, isAuth: boolean) =>
    ({type: SETUSERDATA, payload, isAuth} as const)

export const getAuthUserData = () =>
    async (dispatch: Dispatch<AuthActionsType>) => {
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        dispatch(setUsersDataActionCreator(data.data, true))
    }
}

export const signIn = (email: string, password: string, rememberMe: boolean): AppThunkType =>
    async (dispatch) => {
        const data = await authAPI.signIn(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit("loginForm", {_error: errorMessage}))
        }
    }

export const logout = (): AppThunkType => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUsersDataActionCreator({id: null, login: null, email: null}, false))
    }

}

