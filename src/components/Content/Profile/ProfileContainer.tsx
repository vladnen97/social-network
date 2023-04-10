import React from 'react';
import {Profile} from './Profile';
import {ProfilePageHeaderType, ProfilePageType, setUserProfile} from '../../../redux/profileReducer';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';


type ProfileInnerContainerPropsType = {
    setUserProfile: (profile: ProfilePageHeaderType) => void
}

class ProfileInnerContainer extends React.Component<ProfileInnerContainerPropsType, ProfilePageType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/28671`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <Profile/>
    }
}


const mapStateToProps = (state: RootStateType)=> {
    return {}
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileInnerContainer)
