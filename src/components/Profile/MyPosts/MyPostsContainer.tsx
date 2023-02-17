import React from 'react';
import {addPost, PostsType, UserProfileType} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

import {AppRootStateType} from "../../../Redux/redux-store";

type mapDispatchToPropsType = {
    addPost: (newPostText: string)=> void
}

type mapStateToPropsType = {
    postsData: PostsType[]
    profile: UserProfileType

}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        postsData: state.profileReducer.postsData,
        profile: state.profileReducer.profile
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);