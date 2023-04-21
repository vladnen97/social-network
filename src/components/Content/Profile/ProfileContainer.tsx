import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {getProfile} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {RootStateType} from '../../../redux/redux-store';
import preloader from '../../../static/preloader.gif';

type MapStateToPropsType = {
    isLoading: boolean
}
type ProfileInnerContainerPropsType = MapStateToPropsType & {
    getProfile: (userId: string | undefined) => void
}

function ProfileInnerContainer({getProfile, isLoading}: ProfileInnerContainerPropsType) {
    const location = useParams<{ userId: string }>()

    useEffect(() => {
        getProfile(location.userId)
    }, [location])


    return isLoading
        ? <div style={{width: '150px', margin: 'auto', marginTop: '300px'}}><img src={preloader} alt="fetching"/></div>
        : <Profile/>


}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {isLoading: state.profilePage.isLoading}
}

export const ProfileContainer = connect(mapStateToProps, {getProfile})(ProfileInnerContainer)
