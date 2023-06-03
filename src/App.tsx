import React, {ComponentType} from 'react';
import './App.css';
import {Content} from './components/Content/Content';
import {SideBarContainer} from './components/SideBar/SideBarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {initializeApp} from './redux/app-reducer';
import {RootStateType} from './redux/redux-store';
import {PreLoader} from './components/Content/Users/PreLoader';

type MapStateToPropsType = {
    initialized: boolean
}
type AppPropsType = MapStateToPropsType & {
    initializeApp: () => void
}

class App extends React.Component<AppPropsType, {}> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return !this.props.initialized
            ? <PreLoader/>
            : <div className={'app-wrapper'}>
                <HeaderContainer/>
                <SideBarContainer/>
                <Content/>
            </div>

    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})


export default compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
