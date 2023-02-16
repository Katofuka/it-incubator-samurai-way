import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sidebarReducer: sidebarReducer,
    usersReducer: usersReducer,
    authReducer: authReducer,
    form: formReducer,
})

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore - игнорирует типизацию
window.store = store
