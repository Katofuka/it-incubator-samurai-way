import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {postsType} from "../../../App";

export const MyPosts = (props: postsType) => {
    const postsData = props.postsData
    let postsElements = postsData.map(p => <Post message={p.post} likesCount={p.likesCount}/>)

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
                    {postsElements}
                </div>
            </div>
        </div>
    );
};
