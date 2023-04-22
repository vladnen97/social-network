import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {getProfile} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {RootStateType} from '../../../redux/redux-store';
import preloader from '../../../static/preloader.gif';

type MapStateToPropsType = {
    isLoading: boolean
    isAuth: boolean
}
type ProfileInnerContainerPropsType = MapStateToPropsType & {
    getProfile: (userId: string | undefined) => void
}

function ProfileInnerContainer({getProfile, isLoading, isAuth}: ProfileInnerContainerPropsType) {
    const location = useParams<{ userId: string }>()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        } else {
            getProfile(location.userId)
        }
    }, [location, isAuth])


    return isLoading
        ? <div style={{width: '150px', margin: 'auto', marginTop: '300px'}}><img src={preloader} alt="fetching"/></div>
        : <Profile/>


}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isLoading: state.profilePage.isLoading,
        isAuth: state.auth.isAuth
    }
}

export const ProfileContainer = connect(mapStateToProps, {getProfile})(ProfileInnerContainer)
