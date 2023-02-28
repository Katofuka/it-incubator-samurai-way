import {AppThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type initializedSuccessActionType = ReturnType<typeof initializedSuccess>
export type AppInitialActionType = initializedSuccessActionType

export type AppInitialStateType = {
    isInitialized: boolean
}

const initialState: AppInitialStateType = {
    isInitialized: false
}


const INITIALIZEDSUCCESS = 'INITIALIZED-SUCCESS'


export const appReducer = (state: AppInitialStateType = initialState, action: AppInitialActionType): AppInitialStateType => {
    switch (action.type) {
        case INITIALIZEDSUCCESS:
            return {
                ...state,
                isInitialized: action.isInitialized

            }
        default:
            return state
    }
}

export const initializedSuccess = (isInitialized: boolean) =>
    ({type: INITIALIZEDSUCCESS, isInitialized} as const)



export const initializeApp = (): AppThunkType => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess(true));
}



