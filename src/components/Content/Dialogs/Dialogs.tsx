import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {Divider} from 'antd';
import {DialogsPropsType} from './DialogsContainer';
import AddMessageForm from './addMessageForm';


export function Dialogs({addMessage, dialogsData}: DialogsPropsType) {

    const submitMessage = (values: {text: string}) => {
        addMessage(values.text)
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
                <AddMessageForm onSubmit={submitMessage}/>

            </div>

            <div className={s.dialogs}>
                {mappedDialogs}
            </div>
        </div>
    );
}




