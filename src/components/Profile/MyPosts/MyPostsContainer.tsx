import React from 'react';
import {addPost, changePost, PostsType, UserProfileType} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

import {AppRootStateType} from "../../../Redux/redux-store";

type mapDispatchToPropsType = {
    addPost: ()=> void
    changePost: (text: string)=> void
}

type mapStateToPropsType = {
    postsData: PostsType[]
    newPostText: string
    profile: UserProfileType

}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        postsData: state.profileReducer.postsData,
        newPostText: state.profileReducer.newPostText,
        profile: state.profileReducer.profile
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, changePost})(MyPosts);