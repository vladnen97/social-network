import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {Divider} from 'antd';
import {DialogsPageType} from '../../../redux/state';

type PropsType = {
    dialogsData: DialogsPageType
}

export function Dialogs({dialogsData: {messages, dialogs}}: PropsType) {

    const mappedDialogs = dialogs.map(el => <Dialog key={el.id} name={el.name} url={el.url} status={el.status} path={el.path}/>);
    const mappedMessages = messages.map(el => <Message key={el.id} url={el.url} text={el.text} status={el.status}/>);

    return (
        <div className={s.content}>
            <div className={s.chat}>
                <div className={s.messages}>
                    {mappedMessages}
                </div>

                <Divider className={s.divider}/>

                <div className={s.sendMessage}> {/*доработать*/}
                    <textarea className={s.textArea} placeholder={'Write a message...'}></textarea>
                    <button onClick={() => alert('not work yet')} className={s.sendButton}> send</button>
                </div>
            </div>

            <div className={s.dialogs}>
                {mappedDialogs}
            </div>
        </div>
    );
}




