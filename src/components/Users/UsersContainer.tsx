import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    follow,
    unfollow,
    InitialUsersStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    UserType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";

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
        this.props.toggleIsFetching(true)
        axios.get<InitialUsersStateType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                // debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get<InitialUsersStateType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                // debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
        isFetching: state.usersReducer.isFetching
    }
}

export default connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching})(UsersContainer);
