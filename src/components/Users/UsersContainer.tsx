import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followActionCreator,
    InitialUsersStateType, setPagesActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator, UserType
} from "../../Redux/users-reducer";
import {Users} from "./UsersC";

type mapDispatchToPropsType = {
    followUser: (idUser: number)=> void
    unfollowUser: (idUser: number)=> void
    setUsers: (items: UserType[])=> void
    setPages: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

const mapStateToProps = (state: AppRootStateType): InitialUsersStateType => {
    return {
        items: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage
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
        setPages: (currentPage: number)=> {
            dispatch(setPagesActionCreator(currentPage))
        },
        setTotalUsersCount: (currentPage: number)=> {
            dispatch(setTotalUsersCountActionCreator(currentPage))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
