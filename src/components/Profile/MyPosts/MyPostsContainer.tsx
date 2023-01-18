import React from 'react';

import {addPostActionCreator, changePostActionCreator, ProfilePageType} from "../../../Redux/profile-reducer";
import {useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";

type MyPostContainerPropsType = {
    profilePage: ProfilePageType
}

export const MyPostsContainer = (props: MyPostContainerPropsType) => {
    const dispatch = useDispatch();

    let addPost = () => dispatch(addPostActionCreator())
    let onPostChange = (text: string) => dispatch(changePostActionCreator(text))

    return (
        <MyPosts postsData={props.profilePage.postsData}
                 addPost={addPost}
                 updateNewPostText={onPostChange}
                 newPostText={props.profilePage.newPostText}

        />
    );
};
