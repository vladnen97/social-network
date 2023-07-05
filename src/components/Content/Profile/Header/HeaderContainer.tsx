import {Header} from "./Header";
import {connect} from 'react-redux';
import {RootStateType} from '../../../../redux/redux-store';
import {ProfilePageHeaderType, updateStatus, uploadPhoto} from '../../../../redux/profileReducer';
import {compose} from 'redux';
import {ComponentType} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string | undefined
}
type MapStateToPropsType = {
    header: ProfilePageHeaderType
    status: string
}
export type HeaderPropsType = MapStateToPropsType & RouteComponentProps<PathParamsType> & {
    updateStatus: (status: string) => void
    uploadPhoto: (file: any) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        header: state.profilePage.header,
        status: state.profilePage.status
    }
}

export const HeaderContainer = compose<ComponentType>(connect(mapStateToProps, {updateStatus, uploadPhoto}), withRouter)(Header)