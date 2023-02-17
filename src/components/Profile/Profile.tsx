import React, {memo} from 'react';
import style from "./Profile.module.css";

import {ProfileInfo} from "./ProfieInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profile-reducer";

type ProfilePageType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile = memo((props: ProfilePageType) => {

    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer />


        </div>
    );
});
