import React from 'react';
import d from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';


export function Dialogs() {


    return (
        <div className={d.chat}>

            <div className={d.messages}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>

            <div className={d.dialogs}>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
            </div>
        </div>
    );
}




