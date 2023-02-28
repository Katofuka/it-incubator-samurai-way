import { AppRootStateType } from "./redux-store"

export const getUserItems = (state: AppRootStateType) => {
    return state.usersReducer.items
}
export const getPageSize = (state: AppRootStateType) => {
    return state.usersReducer.pageSize
}
export const getTotalCount = (state: AppRootStateType) => {
    return state.usersReducer.totalCount
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersReducer.currentPage
}
export const getFollowingInProgress = (state: AppRootStateType) => {
    return state.usersReducer.followingInProgress
}
export const getIsFetching = (state: AppRootStateType) => {
    return state.usersReducer.isFetching
}