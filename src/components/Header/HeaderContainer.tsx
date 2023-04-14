import React from 'react';
import {connect} from 'react-redux';
import {InitStateType, setAuthUserData} from '../../redux/authReducer';
import {Header} from './Header';
import axios from 'axios';
import {RootStateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    login: string | null
}
type HeaderContainerType = MapStateToPropsType & {
    setAuthUserData: (data: InitStateType) => void
}

class HeaderContainer extends React.Component<HeaderContainerType, InitStateType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0) this.props.setAuthUserData(res.data.data)
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)