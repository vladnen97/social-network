import React from 'react';
import {Profile} from './Profile';
import {getProfile, ProfilePageType} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from '../../../redux/redux-store';
import preloader from '../../../static/preloader.gif';

type PathParamsType = {
    userId: string | undefined
}
type MapStateToPropsType = {
    isLoading: boolean
    isAuth: boolean
}
type ProfileInnerContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & {
    getProfile: (userId: string | undefined) => void
}

class ProfileInnerContainer extends React.Component<ProfileInnerContainerPropsType, ProfilePageType> {

    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return this.props.isLoading
            ? <div style={{width: '150px', margin: 'auto', marginTop: '300px'}}><img src={preloader} alt="fetching"/></div>
            : <Profile/>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isLoading: state.profilePage.isLoading,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataProfileContainer = withRouter(ProfileInnerContainer)

export const ProfileContainer = connect(mapStateToProps, {getProfile})(WithUrlDataProfileContainer)
