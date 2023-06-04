import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {getUsers, setCurrentPage, setFollow, setUnFollow, UsersPageType, UserType} from '../../../redux/usersReducer';
import React, {ComponentType} from 'react';
import {Users} from './Users';
import {compose} from 'redux';
import {PreLoader} from './PreLoader';
import {
    getCurrentPageSelector, getFollowingProgressSelector,
    getIsFetchingSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from '../../../redux/users-selectors';


type MapStateToPropsType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchToPropsType = {
    setFollow: (userId: number) => void
    setUnFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UsersPageType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage)
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber)
    }

    render() {
        return (
            this.props.isFetching
                ?
                <PreLoader/>
                : <Users users={this.props.users}
                         totalCount={this.props.totalCount}
                         currentPage={this.props.currentPage}
                         followingInProgress={this.props.followingInProgress}
                         setFollow={this.props.setFollow}
                         setUnFollow={this.props.setUnFollow}
                         setCurrentPage={this.onPageChanged}/>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        isFetching: getIsFetchingSelector(state),
        totalCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        followingInProgress: getFollowingProgressSelector(state),
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {
    setFollow,
    setUnFollow,
    setCurrentPage,
    getUsers
}))(UsersAPIComponent)
