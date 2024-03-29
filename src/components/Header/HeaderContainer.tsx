import React from "react";
import {Header} from "./Header";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
    meId: number | null
}
type MapDispatchPropsType = {
   logout: () => void
}

type PropsType = AuthPropsType
type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType, any> {


    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => (
    {
        login: state.authReducer.payload.login ? state.authReducer.payload.login : null,
        isAuth: state.authReducer.isAuth,
        meId: state.authReducer.payload.id ? state.authReducer.payload.id : null,
    }
)


export default connect(mapStateToProps, {logout})(HeaderContainer)