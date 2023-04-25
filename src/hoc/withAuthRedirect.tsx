import React from 'react';
import {Redirect} from 'react-router-dom';
import {RootStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStateToProps = {
    isAuth: boolean
}
const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}


export const withAuthRedirect = (Component: any) => {
    
    class RedirectComponent extends React.Component<any, {}> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
};

