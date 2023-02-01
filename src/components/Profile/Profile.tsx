import React from 'react';
import style from "./Profile.module.css";

import {ProfileInfo} from "./ProfieInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profile-reducer";

type ProfilePageType = {
    profile: UserProfileType
}

export const Profile = (props: ProfilePageType) => {
    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />


        </div>
    );
};
