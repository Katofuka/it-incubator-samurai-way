import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    follow,
    InitialUsersStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

type mapDispatchToPropsType = {
    follow: (userId: number)=> void
    unfollow: (userId: number)=> void
    setUsers: (users: UserType[])=> void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type mapStateToPropType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

type UsersPropsType = mapStateToPropType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        //получаем общее количество пользователей на странице
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                // debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (page: number) => {
        //переключаемся по страницам списка пользователей
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(this.props.pageSize, page)
            .then(data => {
                // debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }

}

const mapStateToProps = (state: AppRootStateType): InitialUsersStateType => {
    return {
        items: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        isFollowingInProgress: state.usersReducer.isFollowingInProgress
    }
}

export default connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching, toggleFollowingInProgress})(UsersContainer);
