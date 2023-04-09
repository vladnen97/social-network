import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC, UsersPageType,
    UserType
} from '../../../redux/usersReducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';

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

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=6&page=${this.props.currentPage}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.onPageClick(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=6&page=${page}`)
            .then(res => {this.props.setUsers(res.data.items)})
    }

    render() {
        return <Users users={this.props.users}
                      limit={this.props.limit}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onFollowClick={this.props.onFollowClick}
                      onUnFollowClick={this.props.onUnFollowClick}
                      onPageClick={this.onPageChanged}/>
    }
}

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

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)

