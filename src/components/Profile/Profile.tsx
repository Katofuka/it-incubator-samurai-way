import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfieInfo/ProfileInfo";
import {ProfilePageType} from '../../Redux/state';

type profileType = {
    profilePage: ProfilePageType
    addPost: () => void
    changePostText: (text: string) => void
}

export const Profile = (props: profileType) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     changePostText={props.changePostText}
            />
        </div>
    );
};
