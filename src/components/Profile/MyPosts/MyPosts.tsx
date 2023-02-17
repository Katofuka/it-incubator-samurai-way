import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/profile-reducer";
import {reduxForm} from "redux-form";
import {AddNewPostForm} from "./AddNewPostForm";


type MyPostsPropsType = {
    postsData: PostsType[]
    addPost: (newPostText: string) => void
}

export type FormPostDataType = {
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsData = props.postsData
    const postsElements = postsData.map(p =>
        <Post key={p.id} message={p.post} likesCount={p.likesCount}/>
    )

    const onSubmit = (formData: FormPostDataType)=> {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={style.postBlock}>
            <div>
                <AddPostReduxForm onSubmit={onSubmit}/>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};


const AddPostReduxForm = reduxForm<FormPostDataType>({form: 'postAddForm'})(AddNewPostForm)
