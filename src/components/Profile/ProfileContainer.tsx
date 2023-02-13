import React from "react";
import style from "./Profile.module.css";
import {Profile} from "./Profile";
import {addPost, changePost, setUserProfile, UserProfileType} from "../../Redux/profile-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = { userId: string }
type MapStatePropsType = {
    profile: UserProfileType
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
    }
)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, changePost, setUserProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const withURLDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {addPost, changePost, setUserProfile})(withURLDataContainerComponent)