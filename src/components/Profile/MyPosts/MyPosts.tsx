import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.postBlock}>
            <div>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    <Post message={"Hello! my name is Anne. And you?"} likesCount={2}/>
                    <Post message={"it`s my first post"} likesCount={11}/>
                </div>
            </div>
        </div>
    );
};
