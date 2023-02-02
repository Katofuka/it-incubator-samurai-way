export type setUsersDataActionType = ReturnType<typeof setUsersData>

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

export const setUsersData = (data: AuthDataType) => ({type: SETUSERDATA, data: data} as const)
