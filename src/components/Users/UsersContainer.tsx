import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followActionCreator,
    InitialUsersStateType,
    setUsersActionCreator,
    unfollowActionCreator, UserType
} from "../../Redux/users-reducer";
import {Users} from "./UsersC";

type mapDispatchToPropsType = {
    followUser: (idUser: number)=> void
    unfollowUser: (idUser: number)=> void
    setUsers: (items: UserType[])=> void
}

const mapStateToProps = (state: AppRootStateType): InitialUsersStateType => {
    return {
        items: state.usersReducer.items,
    }
}
const mapDispatchToProps = (dispatch:  Dispatch): mapDispatchToPropsType => {
    return {
        followUser: (userId: number)=> {
            dispatch(followActionCreator(userId))
        },
        unfollowUser: (userId: number)=> {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users:UserType[])=> {
            dispatch(setUsersActionCreator(users))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
