import axios from "axios";
import {InitialUsersStateType} from "../Redux/users-reducer";
import {UserProfileType} from "../Redux/profile-reducer";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
})


export const usersAPI = {
    getUsers (pageSize: number = 15, currentPage: number = 1)  {
        return instance.get<InitialUsersStateType>(`users?count=${pageSize}&page=${currentPage}`,
        )
            .then(response => response.data)
    },
    unfollowUser (userId: number)  {
        return instance.delete(`follow/${userId}`,
        )
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`,
            {}
        ).then(response => response.data)
    },

}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get<UserProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    authMe () {
        return instance.get(`auth/me` )
            .then(response => response.data)
    },
}

