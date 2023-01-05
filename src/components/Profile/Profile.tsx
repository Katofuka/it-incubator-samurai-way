import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfieInfo/ProfileInfo";
import { profilePageType } from '../../Redux/state';

type profileType = {
    state: profilePageType
    addPost: (text:string)=>void
}

export const Profile = (props: profileType) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    );
};
