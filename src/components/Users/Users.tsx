import React from 'react'
import {UserType} from "../../Redux/users-reducer";
import styles from './Users.module.css'
import defaultUserPhoto from "../../common/images/default-avatar.jpg"
import {NavLink} from "react-router-dom";


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
    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span key={page} onClick={() => props.onPageChanged(page)}
                             className={`${styles.numPage} ${props.currentPage === page ? styles.selectedPage : ''}`}>
                        {page}
                    </span>
            })}

        </div>
        {
            props.items?.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'profile/' + user.id}>
                    <img className={styles.avatar}
                         src={user.photos.small !== null ? user.photos.small : defaultUserPhoto}
                         alt={'avatar_' + user.id}/>
                        </NavLink>
                </div>
                <div>{user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => props.unfollow(user.id)}>Unfollow</button>
                    : <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => props.follow(user.id)}>Follow</button>}</div>
            </span>
                    <span> <div>{user.name}</div> <div>{user.status}</div> </span>
                    <span> <div>{user.id}</div> <div>{user.id}</div> </span>


                </div>
            )
        }
    </div>

}
