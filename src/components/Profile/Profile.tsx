import React from 'react';
import style from "./Profile.module.css";

import {ProfileInfo} from "./ProfieInfo/ProfileInfo";

import {ProfilePageType} from "../../Redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type profileType = {
    profilePage: ProfilePageType
}

export const Profile = (props: profileType) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage}/>


        </div>
    );
};
