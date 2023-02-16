import axios from "axios";
import {InitialUsersStateType} from "../Redux/users-reducer";
import {UserProfileType} from "../Redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1c6fc31b-2023-4b84-8640-ac2aa0578411',
    },
})

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export const usersAPI = {
    getUsers(pageSize: number = 15, currentPage: number = 1) {
        return instance.get<InitialUsersStateType>(`users?count=${pageSize}&page=${currentPage}`,
        )
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
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
    getUserStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus(status: string) {
        console.log('api', status)
        return instance.put<ResponseType<{}>>(`profile/status`, {status: status})
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe: () => instance.get(`auth/me`).then(response => response.data),

    signIn: (email: string, password: string, rememberMe: boolean) =>
        instance.post<ResponseType<{ userId: number }>>('auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: true
        })
            .then(response => response.data)
}

