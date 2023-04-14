import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow, UsersPageType,
    UserType
} from '../../../redux/usersReducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import preloader from '../../../static/preloader.gif'

type MapStateToPropsType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (value: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPageType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=6&page=${this.props.currentPage}`, {withCredentials: true})
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setIsFetching(false)
            })
    }
    componentWillUnmount() {
        this.props.setCurrentPage(1)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=6&page=${page}`, {withCredentials: true})
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
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
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         setCurrentPage={this.onPageChanged}/>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
})(UsersAPIComponent)
