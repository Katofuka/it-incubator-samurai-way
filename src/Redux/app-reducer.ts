import {AppThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


export type AppInitialActionType =
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof changeCollapsedMenu>

export type AppInitialStateType = {
    isInitialized: boolean
    isMenuOpen: boolean
}

const initialState: AppInitialStateType = {
    isInitialized: false,
    isMenuOpen: false,
}


const INITIALIZEDSUCCESS = 'INITIALIZED-SUCCESS'
const CHANGEDCOLLAPSEDMENU = 'CHANGED-COLLAPSED-MENU'


export const appReducer = (state: AppInitialStateType = initialState, action: AppInitialActionType): AppInitialStateType => {
    switch (action.type) {
        case INITIALIZEDSUCCESS:
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        case CHANGEDCOLLAPSEDMENU:
            return {
                ...state,
                isMenuOpen: action.isCollapsed
            }
        default:
            return state
    }
}

export const initializedSuccess = (isInitialized: boolean) =>
    ({type: INITIALIZEDSUCCESS, isInitialized} as const)

export const changeCollapsedMenu = (isCollapsed: boolean) =>
    ({type: CHANGEDCOLLAPSEDMENU, isCollapsed} as const)


export const initializeApp = (): AppThunkType => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess(true));
}



