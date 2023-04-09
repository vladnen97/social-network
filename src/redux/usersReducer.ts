
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

const initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}


export type UsersPageActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC> | ReturnType<typeof setIsFetchingAC>
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
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalCount: action.count
            }
        case 'SET-FETCHING':
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId } as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type : SET_USERS, users} as const)
export const setCurrentPageAC = (page: number) => ({type : SET_CURRENT_PAGE, page} as const)
export const setTotalUsersCountAC = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count} as const)
export const setIsFetchingAC = (value: boolean) => ({type: SET_FETCHING, value} as const)

export default usersReducer;