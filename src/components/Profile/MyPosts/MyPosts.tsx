import React, {ChangeEvent} from 'react';
import style from "./MyPosts.module.css";
import styleApp from'../../../App.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/profile-reducer";


type MyPostsPropsType = {
    postsData: PostsType[]
    newPostText: string
    addPost: () => void
    changePost: (text: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    const postsData = props.postsData
    let postsElements = postsData.map(p =>
        <Post key={p.id} message={p.post} likesCount={p.likesCount}/>
    )

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePost(e.currentTarget.value)
    }

    return (
        <div className={style.postBlock}>
            <div>
                <div className={`${style.addPostBlock} ${styleApp.blockBox}`}>
                    <div className={style.inputPostMessage}>
                        <textarea placeholder={"add post text..."}
                                  onChange={onPostChange}
                                  value={props.newPostText}/>
                    </div>
                    <div className={style.buttonAddPost}>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};
