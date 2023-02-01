import React from 'react';
import {addPost, changePost, InitialProfileStateType} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

import {AppRootStateType} from "../../../Redux/redux-store";

// type MapStatePropsType = {
//     profilePage: InitialStateType
// }

type mapDispatchToPropsType = {
    addPost: ()=> void
    changePost: (text: string)=> void
}


const mapStateToProps = (state: AppRootStateType): InitialProfileStateType => {
    return {
        postsData: state.profileReducer.postsData,
        newPostText: state.profileReducer.newPostText,
        profile: state.profileReducer.profile
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, changePost})(MyPosts);