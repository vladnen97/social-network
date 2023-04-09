import {Users} from './Users';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../../redux/usersReducer';

type MapStateToPropsType = {
    users: Array<UserType>
    limit: number
    totalCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    onFollowClick: (userId: number) => void
    onUnFollowClick: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    onPageClick: (page: number) => void
    setTotalUsersCount: (count: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        limit: state.usersPage.limit,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onFollowClick: (userId) => {dispatch(followAC(userId))},
        onUnFollowClick: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        onPageClick: (page) => {dispatch(setCurrentPageAC(page))},
        setTotalUsersCount: (count) => {dispatch(setTotalUsersCountAC(count))}
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

