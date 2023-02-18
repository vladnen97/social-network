import React from 'react';
import {Header} from "./Header/Header";
import {Wall} from "./Wall/Wall";

type PropsType = {
    localState: {
        header: {
            online: boolean
            url: string
            name: string,
            status: string,
            iconId: string,
            title: string,
        }
        posts: Array<any>
    }
}

export function Profile(props: PropsType) {
    return (
        <div className={'profile'}>
            <Header header={props.localState.header}/>
            <Wall posts={props.localState.posts}/>
        </div>
    );
}