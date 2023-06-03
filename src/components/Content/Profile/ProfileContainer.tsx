import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {getProfile, getStatus} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from '../../../redux/redux-store';
import {compose} from 'redux';
import {PreLoader} from '../Users/PreLoader';

type PathParamsType = {
    userId: string | undefined
}
type MapStateToPropsType = {
    isLoading: boolean
    authUserId: number | null
}
type ProfileInnerContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & {
    getProfile: (userId: number | null) => void
    getStatus: (userId: number | null) => void
}

class ProfileInnerContainer extends React.Component<ProfileInnerContainerPropsType, {}> {

    refreshProfile() {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileInnerContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return this.props.isLoading
            ? <PreLoader/>
            : <Profile/>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isLoading: state.profilePage.isLoading,
        authUserId: state.auth.id
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {getProfile, getStatus}),withRouter)(ProfileInnerContainer)
