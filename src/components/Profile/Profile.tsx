import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.ava} alt='avatar'
                     src="https://abrakadabra.fun/uploads/posts/2022-01/1642131987_41-abrakadabra-fun-p-tyanka-na-prozrachnom-fone-48.jpg"/>
                <p>ava+descriptions</p>
                <p>some text about me</p>
            </div>
            <MyPosts />
        </div>
    );
};
