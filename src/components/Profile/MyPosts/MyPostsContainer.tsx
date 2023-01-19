import React from 'react';
import {addPostActionCreator, changePostActionCreator, InitialProfileStateType} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

import {AppRootStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

// type MapStatePropsType = {
//     profilePage: InitialStateType
// }

type mapDispatchToPropsType = {
    addPost: ()=> void
    updateNewPostText: (text: string)=> void
}


const mapStateToProps = (state: AppRootStateType): InitialProfileStateType => {
    return {
        postsData: state.profileReducer.postsData,
        newPostText: state.profileReducer.newPostText
    }
}
const mapDispatchToProps = (dispatch:  Dispatch): mapDispatchToPropsType => {
    return {
        addPost: ()=> {
            console.log('call dispatch add post')
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string)=> {
            console.log('update post text' , text)
            dispatch(changePostActionCreator(text))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);