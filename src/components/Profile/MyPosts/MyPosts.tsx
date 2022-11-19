import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={style.posts}>
                    <Post message={"Hello! my name is Anne. And you?"} likesCount={2}/>
                    <Post message={"it`s my first post"} likesCount={11}/>
                </div>
            </div>
        </div>
    );
};
