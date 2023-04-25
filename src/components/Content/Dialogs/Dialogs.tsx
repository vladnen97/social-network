import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {Divider} from 'antd';
import {DialogsPropsType} from './DialogsContainer';


export function Dialogs({addMessage, changeNewMessageText, dialogsData}: DialogsPropsType) {

    const addNewMessageHandler = () => addMessage()
    const updateNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewMessageText(e.currentTarget.value)
    }

    const mappedDialogs = dialogsData.dialogs.map(el => <Dialog key={el.id} name={el.name} url={el.url}
                                                                status={el.status} path={el.path}/>);
    const mappedMessages = dialogsData.messages.map(el => <Message key={el.id} url={el.url} text={el.text}
                                                                   status={el.status}/>);

    return (
        <div className={s.content}>
            <div className={s.chat}>
                <div className={s.messages}>
                    {mappedMessages}
                </div>

                <Divider className={s.divider}/>

                <div className={s.sendMessage}>
                    <textarea className={s.textArea}
                              placeholder={'Write a message...'}
                              value={dialogsData.newMessageText}
                              onChange={updateNewMessageTextHandler}
                    />
                    <button onClick={addNewMessageHandler} className={s.sendButton}> send</button>
                </div>
            </div>

            <div className={s.dialogs}>
                {mappedDialogs}
            </div>
        </div>
    );
}




