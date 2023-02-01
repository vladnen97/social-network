import React from "react";
import m from './Message.module.css'

type MessagePropsType = {
    text: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={m.message}>
            {props.text}
        </div>
    );
}
