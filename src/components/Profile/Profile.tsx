import React from 'react';
import style from "./Profile.module.css";

import {ProfileInfo} from "./ProfieInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profile-reducer";
import {Redirect} from "react-router-dom";

type ProfilePageType = {
    profile: UserProfileType
    isAuth: boolean
}

export const Profile = (props: ProfilePageType) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />


        </div>
    );
};
