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
import {Users} from "./Users";

type mapDispatchToPropsType = {
    followUser: (idUser: number)=> void
    unfollowUser: (idUser: number)=> void
    setUsers: (users: UserType[])=> void
}

const mapStateToProps = (state: AppRootStateType): InitialUsersStateType => {

    return {
        users: state.usersReducer.users,
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
