import React from "react";
import style from "./Profile.module.css";
import {Profile} from "./Profile";
import axios from "axios";
import {
    addPost,
    changePost,
    InitialProfileStateType,
    setUserProfile,
    UserProfileType
} from "../../Redux/profile-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: UserProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

class ProfileContainer extends React.Component<ProfilePropsType, any> {
    componentDidMount() {
        axios.get<InitialProfileStateType>(`https://social-network.samuraijs.com/api/1.0/profile/11`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data)
            })
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
        profile: state.profileReducer.profile
    }
)

export default connect(mapStateToProps, {addPost, changePost, setUserProfile})(ProfileContainer)