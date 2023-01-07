import React, {ChangeEvent} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/state";

type MyPostsPropsType = {
    postsData: PostType[]
    addPost: () => void
    newPostText: string
    changePostText: (text: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    const postsData = props.postsData
    let postsElements = postsData.map(p =>
        <Post message={p.post} likesCount={p.likesCount}/>
    )

    let addPost = () => {
        props.addPost()
        //props.changePostText('')
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }

    return (
        <div className={style.postBlock}>
            <div>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};
