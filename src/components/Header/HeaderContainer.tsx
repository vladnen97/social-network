import React from 'react';
import {connect} from 'react-redux';
import {InitStateType, setAuthUserData} from '../../redux/authReducer';
import {Header} from './Header';
import {RootStateType} from '../../redux/redux-store';
import {getAuthData} from '../../api/api';

type MapStateToPropsType = {
    login: string | null
}
type HeaderContainerType = MapStateToPropsType & {
    setAuthUserData: (data: InitStateType) => void
}

class HeaderContainer extends React.Component<HeaderContainerType, InitStateType> {
    componentDidMount() {
        getAuthData().then((data) => {
            if (data.resultCode === 0) this.props.setAuthUserData(data.data)
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