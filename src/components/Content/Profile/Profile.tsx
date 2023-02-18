import React from 'react';
import {Header} from "./Header/Header";
import {Wall} from "./Wall/Wall";


export function Profile(props: any) {
    return (
        <div className={'profile'}>
            <Header/>
            <Wall/>
        </div>
    );
}