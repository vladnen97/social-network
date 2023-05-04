import {Header} from "./Header";
import {connect} from 'react-redux';
import {RootStateType} from '../../../../redux/redux-store';
import {ProfilePageHeaderType, updateStatus} from '../../../../redux/profileReducer';


type MapStateToPropsType = {
    header: ProfilePageHeaderType
    status: string
}
export type HeaderPropsType = MapStateToPropsType & {
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        header: state.profilePage.header,
        status: state.profilePage.status
    }
}

export const HeaderContainer = connect(mapStateToProps, {updateStatus})(Header)