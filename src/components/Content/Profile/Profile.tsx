import React from 'react';
import {Header} from "./Header/Header";
import {SubmitPost} from "./SubmitPost/SubmitPost";
import {Wall} from "./Wall/Wall";


export function Profile(props: any) {
    return (
        <div className={'profile'}>
            <Header/>
            <SubmitPost/>
            <Wall posts={props.localState.posts}/>
        </div>
    );
}