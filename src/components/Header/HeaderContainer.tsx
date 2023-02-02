import React from "react";
import {Header} from "./Header";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {AuthDataType, setUsersData} from "../../Redux/auth-reducer";
import axios from "axios";


type MapStatePropsType = {
    login: string
    isAuth: boolean
    meId: number
}
type MapDispatchPropsType = {
    setUsersData: (data: AuthDataType) => void
}

type PropsType = AuthPropsType
type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUsersData(response.data.data)
                }
            })
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


export default connect(mapStateToProps, {setUsersData})(HeaderContainer)