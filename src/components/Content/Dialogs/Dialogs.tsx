import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {Divider} from 'antd';


export function Dialogs() {


    return (
        <div className={s.content}>

            <div className={s.chat}>
                <div className={s.messages}>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>

                <Divider className={s.divider}/>

                <div className={s.sendMessage}>
                    <textarea className={s.textArea} placeholder={'Write a message...'}></textarea>
                    <button onClick={() => alert('not work yet')} className={s.sendButton}> send </button>
                </div>
            </div>

            <div className={s.dialogs}>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
            </div>
        </div>
    );
}




