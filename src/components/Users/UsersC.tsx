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
}

export class Users extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props)

        axios.get<InitialUsersStateType>("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }

    // getUsers= ()=> {
    //     if (this.props.items.length === 0) {
    //         axios.get<InitialUsersStateType>("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 this.props.setUsers(response.data.items)
    //             })
    //     }
    // }
    render() {
        return <div>
            {
                this.props.items.map(user => <div key={user.id}>
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