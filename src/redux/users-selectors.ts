import {RootStateType} from './redux-store';

export const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}

export const getIsFetchingSelector = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getTotalUsersCountSelector = (state: RootStateType) => {
    return state.usersPage.totalCount
}

export const getCurrentPageSelector = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getFollowingProgressSelector = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}