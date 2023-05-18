import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {getProfile, getStatus} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from '../../../redux/redux-store';
import preloader from '../../../assets/preloader.gif';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string | undefined
}
type MapStateToPropsType = {
    isLoading: boolean
    authUserId: number | null
}
type ProfileInnerContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
}

class ProfileInnerContainer extends React.Component<ProfileInnerContainerPropsType, {}> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 28429
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return this.props.isLoading
            ? <div style={{width: '150px', margin: 'auto', marginTop: '300px'}}><img src={preloader} alt="fetching"/></div>
            : <Profile/>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isLoading: state.profilePage.isLoading,
        authUserId: state.auth.id
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {getProfile, getStatus}),withRouter, withAuthRedirect)(ProfileInnerContainer)
