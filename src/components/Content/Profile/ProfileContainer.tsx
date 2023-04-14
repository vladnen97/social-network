import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {ProfilePageHeaderType, setUserProfile} from '../../../redux/profileReducer';
import axios from 'axios';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';


type ProfileInnerContainerPropsType = {
    setUserProfile: (profile: ProfilePageHeaderType) => void
}

function ProfileInnerContainer({setUserProfile}: ProfileInnerContainerPropsType) {
    const location = useParams<{ userId: string }>()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${location.userId ? location.userId : 28429}`)
            .then(res => {
                setUserProfile(res.data)
            })
    }, [location])


    return <Profile/>
}

export const ProfileContainer = connect(null, {setUserProfile})(ProfileInnerContainer)
