import React from 'react';
import {connect} from 'react-redux';
import {getAuthData, InitStateType} from '../../redux/authReducer';
import {Header} from './Header';
import {RootStateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    login: string | null
}
type HeaderContainerType = MapStateToPropsType & {
    getAuthData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, InitStateType> {
    componentDidMount() {
        this.props.getAuthData()
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

export default connect(mapStateToProps, {getAuthData})(HeaderContainer)