import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <p>ava+descriptions</p>
                <p>some text about me</p>
            </div>
            <MyPosts />
        </div>
    );
};
