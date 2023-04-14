import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {ProfilePageHeaderType, setUserProfile} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProfileData} from '../../../api/api';


type ProfileInnerContainerPropsType = {
    setUserProfile: (profile: ProfilePageHeaderType) => void
}

function ProfileInnerContainer({setUserProfile}: ProfileInnerContainerPropsType) {
    const location = useParams<{ userId: string }>()

    useEffect(() => {
        getProfileData(location.userId).then(data => {
                setUserProfile(data)
            })
    }, [location])


    return <Profile/>
}

export const ProfileContainer = connect(null, {setUserProfile})(ProfileInnerContainer)
