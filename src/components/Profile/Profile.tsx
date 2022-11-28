import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfieInfo/ProfileInfo";
import {postType} from "../../index";

export type profileType = {
    postsData: postType[]
}

export const Profile = (props: profileType) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};
