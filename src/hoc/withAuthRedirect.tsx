import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth)
            return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>

    }


    return connect(mapStateToProps)(RedirectComponent)

}