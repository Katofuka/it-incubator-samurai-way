import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";


const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sidebarReducer: sidebarReducer
})

export const store = createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore - игнорирует типизацию
window.store = store
