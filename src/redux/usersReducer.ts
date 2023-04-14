
export type UserType = {
    id: number
    name: string
    status: string | null
    photos: {small: string | null, large: string | null}
    followed: boolean
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_FETCHING = 'SET-FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET-FOLLOWING-PROGRESS'

const initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]
}


export type UsersPageActionType = ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setIsFetching> | ReturnType<typeof toggleFollowingProgress>
export type UsersPageType = typeof initialState


function usersReducer(state: UsersPageType = initialState, action: UsersPageActionType): UsersPageType {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true}: el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false}: el)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.count
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case SET_FOLLOWING_PROGRESS:
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


export const follow = (userId: number) => ({type: FOLLOW, userId } as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type : SET_USERS, users} as const)
export const setCurrentPage = (page: number) => ({type : SET_CURRENT_PAGE, page} as const)
export const setTotalUsersCount = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count} as const)
export const setIsFetching = (value: boolean) => ({type: SET_FETCHING, value} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: SET_FOLLOWING_PROGRESS, isFetching, userId} as const)

export default usersReducer;