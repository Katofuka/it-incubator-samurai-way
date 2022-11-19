import React from 'react';
import style from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <div className={style.content}>
            <div>My posts
                <div>New post</div>
                <div className={style.posts}>
                    <div className={style.item}>post1</div>
                    <div className={style.item}>post 2</div>
                </div>
            </div>
        </div>
    );
};
