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

export const Users = (props: UsersPropsType) => {
    // const users = [
    //     {
    //         id: 1,
    //         photo: 'http://languagepro.com.br/wp-content/uploads/2011/11/1003.jpg',
    //         fullName: 'Leam F.',
    //         followed: true,
    //         status: "i'm tomato",
    //         location: {city: 'New Dely', country: 'India'}
    //     },
    //     {
    //         id: 2,
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Seabase_bahamas_-_baracuda_fishing_-_02.jpg',
    //         fullName: 'Seasc S.',
    //         followed: true,
    //         status: 'jaj eje hdhe',
    //         location: {city: 'Barakuda', country: 'Geas'}
    //     },
    //     {
    //         id: 3,
    //         photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDqSKts5g98huuOXPL5qJ_bnfbOTzY1lZYw&usqp=CAU',
    //         fullName: 'Mike V.', followed: false, status: 'next door', location: {city: 'Monster-will', country: ''}
    //     },
    //     {
    //         id: 4,
    //         photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TFtFRxhxsb0c0NHQp2vMi_a2H5HqAkJNPw&usqp=CAU',
    //         fullName: 'Jeeem L.',
    //         followed: true,
    //         status: 'where is my jame?!',
    //         location: {city: 'Dakota', country: 'US'}
    //     },
    //     {
    //         id: 5,
    //         photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZI4oUc7D_R-wmRCbh6HQGm3-9o3CSlXePOeTwcdJp3O7-BsEri8a8_S_kdrfoSWUOKQ&usqp=CAU',
    //         fullName: 'Sasnsa S.',
    //         followed: false,
    //         status: 'winter is coming',
    //         location: {city: 'Winterfell', country: 'Seven Kingdoms'}
    //     }]
    const getUsers= ()=> {

        if (props.items.length === 0) {
            axios.get<InitialUsersStateType>("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
            //props.setUsers(users)

        }
    }


    return <div>
        <button className={styles.getUsersButton} onClick={getUsers}>Get Users</button>
        {
        props.items.map(user => <div key={user.id}>
            <span>
                <div><img className={styles.avatar}
                          src={user.photos.small!==null ? user.photos.small : defaultUserPhoto}
                          alt={'avatar_'+user.id}/></div>
                <div>{user.followed
                    ? <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                    : <button onClick={() => props.followUser(user.id)}>Follow</button>}</div>
            </span>
                <span> <div>{user.name}</div> <div>{user.status}</div> </span>
                <span> <div>{user. id}</div> <div>{user.id}</div> </span>


            </div>
        )
    }
    </div>

}