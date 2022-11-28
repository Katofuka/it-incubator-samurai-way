import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfieInfo/ProfileInfo";
import { postsType } from '../..';


export const Profile = (props: postsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};
