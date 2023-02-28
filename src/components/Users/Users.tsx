import React from 'react'
import {UserType} from "../../Redux/users-reducer";
import styles from './Users.module.css'
import defaultUserPhoto from "../../common/images/default-avatar.jpg"
import {NavLink} from "react-router-dom";
import {Pagination} from "@mui/material";


type UsersPropsType = {
    items: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (page: number) => void
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    return (
        <div className={styles.usersPageBlock}>
            <div className={styles.paginationBlock}>
                <Pagination
                    shape="rounded"
                    count={pagesCount}
                    page={props.currentPage}
                    onChange={(event, page) => props.onPageChanged(page)}/>
            </div>

            <div className={styles.usersListBlock}>
            {props.items?.map(user => (
                <div key={user.id} className={styles.userCard}>
                    <div className={styles.userName}>{user.name}</div>
                    <div>
                        <NavLink to={'profile/' + user.id}>
                            <img className={styles.avatar}
                                 src={user.photos.small !== null ? user.photos.small : defaultUserPhoto}
                                 alt={'avatar_' + user.id}/>
                        </NavLink>

                    </div>
                    <div className={styles.userStatus}>{user.status || 'samurai dont have a status'}</div>
                    <div>{user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => props.follow(user.id)}>Follow</button>}</div>
                    {/*<span> <div>{user.id}</div> <div>{user.id}</div> </span>*/}


                </div>
            ))
            }
            </div>
        </div>
    )

}
