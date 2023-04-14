import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow, UsersPageType,
    UserType
} from '../../../redux/usersReducer';
import React from 'react';
import {Users} from './Users';
import preloader from '../../../static/preloader.gif'
import {getUsers} from '../../../api/api';

type MapStateToPropsType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (value: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPageType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage).then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        getUsers(page).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            this.props.isFetching
                ?
                <div style={{width: '200px', margin: 'auto', marginTop: '300px'}}><img src={preloader} alt="fetching"/>
                </div>
                : <Users users={this.props.users}
                         totalCount={this.props.totalCount}
                         currentPage={this.props.currentPage}
                         followingInProgress={this.props.followingInProgress}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         setCurrentPage={this.onPageChanged}
                         toggleFollowingProgress={this.props.toggleFollowingProgress}/>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    toggleFollowingProgress
})(UsersAPIComponent)
