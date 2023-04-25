import React from 'react';
import {Profile} from './Profile';
import {getProfile} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from '../../../redux/redux-store';
import preloader from '../../../static/preloader.gif';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';

type PathParamsType = {
    userId: string | undefined
}
type MapStateToPropsType = {
    isLoading: boolean
}
type ProfileInnerContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & {
    getProfile: (userId: string | undefined) => void
}

class ProfileInnerContainer extends React.Component<ProfileInnerContainerPropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '28429'
        }
        this.props.getProfile(userId)
    }


    render() {
        return this.props.isLoading
            ? <div style={{width: '150px', margin: 'auto', marginTop: '300px'}}><img src={preloader} alt="fetching"/></div>
            : <Profile/>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isLoading: state.profilePage.isLoading
    }
}

const authRedirectComponent = withAuthRedirect(ProfileInnerContainer)
const WithUrlDataProfileContainer = withRouter(authRedirectComponent)


export default connect(mapStateToProps, {getProfile})(WithUrlDataProfileContainer)
