import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {dialogReducer, DialogsActionsType} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

import {FormAction, reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sidebarReducer: sidebarReducer,
    usersReducer: usersReducer,
    authReducer: authReducer,
    form: formReducer,
})

export type AppActionsType = AuthActionsType | DialogsActionsType | ProfileActionsType | UsersActionsType

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkType <ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType | FormAction>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore - игнорирует типизацию
window.store = store
