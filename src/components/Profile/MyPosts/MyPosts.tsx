import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        {id: 1, post: 'Hello! my name is Anne. And you?', likesCount:2},
        {id: 2, post: 'it`s my first post', likesCount:42},

    ]

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
                    <Post message={postsData[1].post} likesCount={postsData[1].likesCount}/>
                    <Post message={postsData[0].post} likesCount={postsData[0].likesCount}/>
                </div>
            </div>
        </div>
    );
};
