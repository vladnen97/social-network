import {addMessage, changeNewMessageText, DialogsPageType} from '../../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';


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

const authRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    changeNewMessageText,
})(authRedirectComponent)




