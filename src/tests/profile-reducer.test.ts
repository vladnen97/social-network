import profileReducer, {
    addPost,
    PostType,
    ProfilePageHeaderType,
    setIsFetching,
    setStatus, setUserProfile
} from '../redux/profileReducer';

type StartStateType = {
    isLoading: boolean
    status: string
    header: ProfilePageHeaderType,
    posts: Array<PostType>
}

let startState: StartStateType
let profile: ProfilePageHeaderType

beforeEach(() => {
    startState = {
        isLoading: false,
        status: '',
        header: {} as ProfilePageHeaderType,
        posts: [{
            id: '1',
            name: 'Name Surname',
            date: '25 Junary 2023',
            postContent: 'nibh sit amet commodo nulla facilisi nullam vehicula ipsum a',
            likes: 1,
            comments: 0
        },
            {
                id: '2',
                name: 'Name Surname',
                date: '22 Junary 2023',
                postContent: 'Hello, how are you today',
                likes: 9,
                comments: 0
            }] as Array<PostType>
    }
    profile = {
        aboutMe: '',
        contacts: {
            facebook: '',
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: '',
        },
        fullName: 'Name Surname',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: { small: null, large: null },
        userId: 123
    }
})

it('post should be added', () => {

    const endState = profileReducer(startState, addPost('my first post'))

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].postContent).toBe('my first post')
})

it('status should be changed', () => {

    const endState = profileReducer(startState, setStatus('my new status'))

    expect(endState.status).toBe('my new status')
})

it('fetching should be changed', () => {

    const endState = profileReducer(startState, setIsFetching(true))

    expect(endState.isLoading).toBeTruthy()
})

it('user profile should be setted', () => {
    const endState = profileReducer(startState, setUserProfile(profile))

    expect(endState.header?.userId).toBe(123)
    expect(endState.header?.fullName).toBe('Name Surname')
})

