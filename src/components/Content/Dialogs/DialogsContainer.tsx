import React from 'react';
import {addMessageActionCreator, changeNewMessageTextActionCreator} from '../../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import StoreContext from '../../../storeContext';


export function DialogsContainer() {

    return (
    <StoreContext.Consumer>
        {
            (store) => {

                const dialogsPage = store.getState().dialogsPage

                const addNewMessage = (): void => {
                    store.dispatch(addMessageActionCreator())
                }
                const updateNewMessageText = (value: string): void => {
                    store.dispatch(changeNewMessageTextActionCreator(value));
                }

                return <Dialogs updateNewMessageText={updateNewMessageText}
                                        addNewMessage={addNewMessage}
                                        dialogsData={dialogsPage}
                />
            }
        }
    </StoreContext.Consumer>
    )
}




