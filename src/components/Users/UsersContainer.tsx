import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {follow, getUsers, unfollow, UserType} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
}

type mapStateToPropType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    followingInProgress: number[]
    isFetching: boolean
}

type UsersStateType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    followingInProgress: number[]
    isFetching: boolean
}

type UsersPropsType = mapStateToPropType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        //получаем общее количество пользователей на странице
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (page: number) => {
        //переключаемся по страницам списка пользователей
        this.props.getUsers(this.props.pageSize, page)
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

const mapStateToProps = (state: AppRootStateType): UsersStateType => {
    return {
        items: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        followingInProgress: state.usersReducer.followingInProgress,
        isFetching: state.usersReducer.isFetching
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, getUsers})(UsersContainer);
