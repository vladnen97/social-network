import {SideBar} from './SideBar';
import {RootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {SideBarType} from '../../redux/sideBarReducer';


type MapStateToPropsType = {
    sideBar: SideBarType
}
export type SideBarPropsType = MapStateToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        sideBar: state.sideBar
    }
}

export const SideBarContainer = connect(mapStateToProps)(SideBar)