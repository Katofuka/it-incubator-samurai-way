import React from "react";
import style from "./Profile.module.css";
import {Profile} from "./Profile";
import {
    addPost,
    changePost,
    setUserProfile,
    UserProfileType,
    getUserStatus,
    updateUserStatus
} from "../../Redux/profile-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = { userId: string }

type MapStatePropsType = {
    profile: UserProfileType
    status: string
}
type MapDispatchPropsType = {
    setUserProfile: (userId:string) => void
    getUserStatus: (userId:string) => void
    updateUserStatus: (status: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "27415"
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)


    }
    render() {
        return (
            <div className={style.content}>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => (
    {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status
    }
)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, changePost, setUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const withURLDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {addPost, changePost, setUserProfile})(withURLDataContainerComponent)