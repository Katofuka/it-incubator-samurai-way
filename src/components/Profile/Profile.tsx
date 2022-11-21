import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfieInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};
