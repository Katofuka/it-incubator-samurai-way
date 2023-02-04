import React from 'react'
import {toggleFollowingInProgress, UserType} from "../../Redux/users-reducer";
import styles from './Users.module.css'
import defaultUserPhoto from "../../common/images/default-avatar.jpg"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    items: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    toggleFollowingInProgress: (isFetching: boolean) => void
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
                    ? <button onClick={() => {
                        props.toggleFollowingInProgress(true)
                        usersAPI.unfollowUser(user.id)
                            .then(data => {
                                if(data.resultCode===0) {
                                    props.unfollow(user.id)
                                }
                                props.toggleFollowingInProgress(false)
                            })


                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.toggleFollowingInProgress(true)
                        usersAPI.followUser(user.id)
                            .then(data => {
                                if(data.resultCode===0) {
                                    props.follow(user.id)
                                }
                                props.toggleFollowingInProgress(false)
                            })

                    }}>Follow</button>}</div>
            </span>
                    <span> <div>{user.name}</div> <div>{user.status}</div> </span>
                    <span> <div>{user.id}</div> <div>{user.id}</div> </span>


                </div>
            )
        }
    </div>

}