import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {follow, requestUsers, unfollow, UserType} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalCount,
    getUserItems
} from "../../Redux/user-selectors";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (pageSize: number, currentPage: number) => void
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
        this.props.requestUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (page: number) => {
        //переключаемся по страницам списка пользователей
        this.props.requestUsers(this.props.pageSize, page)
    }

    render() {
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
        items: getUserItems(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        isFetching: getIsFetching(state),
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, requestUsers})(UsersContainer);
