import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/authReducer';
import {Header} from './Header';
import {RootStateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type HeaderContainerType = MapStateToPropsType & {
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, {}> {
    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)