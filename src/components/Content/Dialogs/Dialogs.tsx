import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {Divider} from 'antd';
import {DialogsPageType} from '../../../redux/dialogsReducer';


type PropsType = {
    updateNewMessageText: (value: string) => void
    addNewMessage: () => void
    dialogsData: DialogsPageType
}


export function Dialogs({addNewMessage, updateNewMessageText, dialogsData}: PropsType) {

    const addNewMessageHandler = () => addNewMessage()
    const updateNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value)
    }

    const mappedDialogs = dialogsData.dialogs.map(el => <Dialog key={el.id} name={el.name} url={el.url} status={el.status} path={el.path}/>);
    const mappedMessages = dialogsData.messages.map(el => <Message key={el.id} url={el.url} text={el.text} status={el.status}/>);


    return (
        <div className={s.content}>
            <div className={s.chat}>
                <div className={s.messages}>
                    {mappedMessages}
                </div>

                <Divider className={s.divider}/>

                <div className={s.sendMessage}> {/*доработать*/}
                    <textarea className={s.textArea}
                              placeholder={'Write a message...'}
                              value={dialogsData.newMessageText}
                              onChange={updateNewMessageTextHandler}
                    />
                    <button onClick={addNewMessageHandler} className={s.sendButton}> send </button>
                </div>
            </div>

            <div className={s.dialogs}>
                {mappedDialogs}
            </div>
        </div>
    );
}




