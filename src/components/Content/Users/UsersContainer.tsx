import {Users} from './Users';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../../redux/usersReducer';

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    onFollowClick: (userId: string) => void
    onUnFollowClick: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onFollowClick: (userId) => {dispatch(followAC(userId))},
        onUnFollowClick: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

