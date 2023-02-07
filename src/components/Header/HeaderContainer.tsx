import React from "react";
import {Header} from "./Header";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";


type MapStatePropsType = {
    login: string
    isAuth: boolean
    meId: number
}
type MapDispatchPropsType = {
    setUserData: () => void
}

type PropsType = AuthPropsType
type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        this.props.setUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => (
    {
        login: state.authReducer.data.login,
        isAuth: state.authReducer.isAuth,
        meId: state.authReducer.data.id,

    }
)


export default connect(mapStateToProps, {setUserData})(HeaderContainer)