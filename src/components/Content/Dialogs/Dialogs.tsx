import React from 'react';
import d from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export function Dialogs(props: any) {

    let messageElements = props.localState.messages.map( (m:any) => <Message text={m.text}/>);
    let dialogElements = props.localState.dialogs.map( (d:any) => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={d.content}>
            <div className={d.chat}>
                {messageElements}
            </div>
            <div className={d.dialogs}>
                {dialogElements}
            </div>
        </div>
    );
}




