import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {ProfilePageHeaderType, setUserProfile} from '../../../redux/profileReducer';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {useParams} from 'react-router-dom';


type ProfileInnerContainerPropsType = {
    setUserProfile: (profile: ProfilePageHeaderType) => void
}

function ProfileInnerContainer(props: ProfileInnerContainerPropsType) {
    const location = useParams<{ userId: string }>()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${location.userId ? location.userId : 28671}`)
            .then(res => {
                props.setUserProfile(res.data)
            })
    }, [location])


    return <Profile/>
}


const mapStateToProps = (state: RootStateType) => {
    return {}
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileInnerContainer)
