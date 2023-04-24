import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

export type UserType = {
    id: number
    name: string
    status: string | null
    photos: { small: string | null, large: string | null }
    followed: boolean
}
export type UsersPageType = typeof initialState

export type UsersPageActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

enum UsersActionTypes {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
    SET_FETCHING = 'SET-FETCHING',
    SET_FOLLOWING_PROGRESS = 'SET-FOLLOWING-PROGRESS',
}


//init state
const initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]
}

//reducer
function usersReducer(state: UsersPageType = initialState, action: UsersPageActionType): UsersPageType {
    switch (action.type) {
        case UsersActionTypes.FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        case UsersActionTypes.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        case UsersActionTypes.SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case UsersActionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case UsersActionTypes.SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.count
            }
        case UsersActionTypes.SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case UsersActionTypes.SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [action.userId, ...state.followingInProgress]
                    : state.followingInProgress.filter(el => el !== action.userId)
            }
        default:
            return state
    }
}

//acton-creators
export const follow = (userId: number) => ({type: UsersActionTypes.FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UsersActionTypes.UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: UsersActionTypes.SET_USERS, users} as const)
export const setCurrentPage = (page: number) => ({type: UsersActionTypes.SET_CURRENT_PAGE, page} as const)
export const setTotalUsersCount = (count: number) => ({type: UsersActionTypes.SET_TOTAL_USERS_COUNT, count} as const)
export const setIsFetching = (value: boolean) => ({type: UsersActionTypes.SET_FETCHING, value} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: UsersActionTypes.SET_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

//thunk-creators
export const getUsers = (currentPage: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    usersAPI.getUsers(currentPage).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setIsFetching(false))
    })

}

export const setFollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))

    usersAPI.setFollow(userId).then((data) => {
        dispatch(toggleFollowingProgress(false, userId))
        if (data.resultCode === 0) dispatch(follow(userId))
    })
}

export const setUnFollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))

    usersAPI.setUnFollow(userId).then((data) => {
        dispatch(toggleFollowingProgress(false, userId))
        if (data.resultCode === 0) dispatch(unfollow(userId))
    })
}

export default usersReducer;