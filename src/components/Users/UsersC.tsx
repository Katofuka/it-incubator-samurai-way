import React from 'react'
import {InitialUsersStateType, UserType} from "../../Redux/users-reducer";
import styles from './Users.module.css'
import axios from "axios";
import defaultUserPhoto from "../../common/images/default-avatar.jpg"


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

export class Users extends React.Component<UsersPropsType, any> {

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
        const pages: number[]  = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(page => {
                    return <span key={page} onClick={()=>this.onPageChanged(page)}
                        className={`${styles.numPage} ${this.props.currentPage === page ? styles.selectedPage : ''}`}>
                        {page}
                    </span>
                })}

            </div>
            {
                this.props.items?.map(user => <div key={user.id}>
            <span>
                <div><img className={styles.avatar}
                          src={user.photos.small !== null ? user.photos.small : defaultUserPhoto}
                          alt={'avatar_' + user.id}/></div>
                <div>{user.followed
                    ? <button onClick={() => this.props.unfollowUser(user.id)}>Unfollow</button>
                    : <button onClick={() => this.props.followUser(user.id)}>Follow</button>}</div>
            </span>
                        <span> <div>{user.name}</div> <div>{user.status}</div> </span>
                        <span> <div>{user.id}</div> <div>{user.id}</div> </span>


                    </div>
                )
            }
        </div>
    }

}