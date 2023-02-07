import React from "react";
import style from "./Profile.module.css";
import {Profile} from "./Profile";
import {addPost, changePost, setUserProfile, UserProfileType} from "../../Redux/profile-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = { userId: string }
type MapStatePropsType = {
    profile: UserProfileType
    isAuth: boolean
}
type MapDispatchPropsType = {
    setUserProfile: (userId:string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.setUserProfile(userId)
    }
    render() {
        return (
            <div className={style.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => (
    {
        profile: state.profileReducer.profile,
        isAuth: state.authReducer.isAuth
    }
)

const withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {addPost, changePost, setUserProfile})(withURLDataContainerComponent)