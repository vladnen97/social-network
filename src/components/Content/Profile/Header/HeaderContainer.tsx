import {Header} from "./Header";
import {connect} from 'react-redux';
import {RootStateType} from '../../../../redux/redux-store';
import {ProfilePageHeaderType, updateProfileData, updateStatus, uploadPhoto} from '../../../../redux/profileReducer';
import {compose} from 'redux';
import {ComponentType} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {UpdateProfileData} from '../../../../api/api';

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
    updateProfileData: (model: UpdateProfileData) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        header: state.profilePage.header,
        status: state.profilePage.status
    }
}

export const HeaderContainer = compose<ComponentType>(connect(mapStateToProps, {updateStatus, uploadPhoto, updateProfileData}), withRouter)(Header)