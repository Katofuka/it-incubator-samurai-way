import React from 'react'
import {InitialUsersStateType, UserType} from "../../Redux/users-reducer";
import styles from './Users.module.css'
import axios from "axios";
import defaultUserPhoto from "../../common/images/default-avatar.jpg"


type UsersPropsType = {
    items: UserType[]
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (page: number)=>void
}

export const Users = (props: UsersPropsType) => {


    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages: number[]  = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span key={page} onClick={()=>props.onPageChanged(page)}
                             className={`${styles.numPage} ${props.currentPage === page ? styles.selectedPage : ''}`}>
                        {page}
                    </span>
            })}

        </div>
        {
            props.items?.map(user => <div key={user.id}>
            <span>
                <div><img className={styles.avatar}
                          src={user.photos.small !== null ? user.photos.small : defaultUserPhoto}
                          alt={'avatar_' + user.id}/></div>
                <div>{user.followed
                    ? <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                    : <button onClick={() => props.followUser(user.id)}>Follow</button>}</div>
            </span>
                    <span> <div>{user.name}</div> <div>{user.status}</div> </span>
                    <span> <div>{user.id}</div> <div>{user.id}</div> </span>


                </div>
            )
        }
    </div>

}