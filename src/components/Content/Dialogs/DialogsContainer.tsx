import {addMessageActionCreator, changeNewMessageTextActionCreator, DialogsPageType} from '../../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    dialogsData: DialogsPageType
}
type MapDispatchToPropsType = {
    addNewMessage: () => void
    updateNewMessageText: (value: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessage: () => {dispatch(addMessageActionCreator())},
        updateNewMessageText: (value: string) => {dispatch(changeNewMessageTextActionCreator(value))}
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)




