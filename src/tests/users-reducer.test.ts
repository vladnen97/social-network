import usersReducer, {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount, toggleFollowingProgress,
    unfollow,
    UserType
} from '../redux/usersReducer';


type StartStateType = {
    users: Array<UserType>,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}
let startState: StartStateType

beforeEach(() => {
    startState = {
        users: [
            {
                id: 1,
                name: 'name1',
                status: 'hello',
                photos: { small: null, large: null },
                followed: false
            },
            {
                id: 2,
                name: 'name2',
                status: 'hello again',
                photos: { small: null, large: null },
                followed: true
            }
        ],
        totalCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    }
})

it('should be followed to user', () => {
    const endState = usersReducer(startState, follow(1))

    expect(endState.users[0].followed).toBeTruthy()
})

it('should unfollowed to user', () => {
    const endState = usersReducer(startState, unfollow(2))

    expect(endState.users[1].followed).toBeFalsy()
})

it('should set current page', () => {
    const endState = usersReducer(startState, setCurrentPage(5))

    expect(endState.currentPage).toBe(5)
})

it('should set total users count', () => {
    const endState = usersReducer(startState, setTotalUsersCount(100))

    expect(endState.totalCount).toBe(100)
})

it('should set fetching', () => {
    const endState = usersReducer(startState, setIsFetching(true))

    expect(endState.isFetching).toBeTruthy()
})

it('should toggle following progress', () => {
    const endState = usersReducer(startState, toggleFollowingProgress(true, 1))

    expect(endState.followingInProgress[0]).toBe(1)
})

