import React from "react";
import {Header} from "./Header";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {AuthDataType, setUsersData} from "../../Redux/auth-reducer";
import {profileAPI} from "../../api/api";


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
        profileAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUsersData(data.data)
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