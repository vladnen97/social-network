import {addMessage, changeNewMessageText, DialogsPageType} from '../../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';


type MapStateToPropsType = {
    dialogsData: DialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMessage: () => void
    changeNewMessageText: (value: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    changeNewMessageText,
})(Dialogs)




