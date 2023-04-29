import {addMessage, changeNewMessageText, DialogsPageType} from '../../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {ComponentType} from 'react';


type MapStateToPropsType = {
    dialogsData: DialogsPageType
}
type MapDispatchToPropsType = {
    addMessage: () => void
    changeNewMessageText: (value: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage,
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {
    addMessage,
    changeNewMessageText,
}), withAuthRedirect)(Dialogs)




