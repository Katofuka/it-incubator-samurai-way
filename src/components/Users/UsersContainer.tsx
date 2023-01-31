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
import axios from "axios";
import {Users} from "./Users";

type UsersPropsType = {
    items: UserType[]
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setPages: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    followUser: (idUser: number)=> void
    unfollowUser: (idUser: number)=> void
    setUsers: (items: UserType[])=> void
    setPages: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class UsersContainer extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get<InitialUsersStateType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (page: number) => {
        this.props.setPages(page)
        axios.get<InitialUsersStateType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <Users items={this.props.items}
                      followUser={this.props.followUser}
                      unfollowUser={this.props.unfollowUser}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}/>
    }

}

const mapStateToProps = (state: AppRootStateType): InitialUsersStateType => {
    return {
        items: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
