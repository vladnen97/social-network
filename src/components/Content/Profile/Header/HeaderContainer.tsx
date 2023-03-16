import {Header} from "./Header";
import {connect} from 'react-redux';
import {RootStateType} from '../../../../redux/redux-store';
import {ProfilePageHeaderType} from '../../../../redux/profileReducer';


type MapStateToPropsType = {
    header: ProfilePageHeaderType
}
export type HeaderPropsType = MapStateToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        header: state.profilePage.header
    }
}

export const HeaderContainer = connect(mapStateToProps)(Header)