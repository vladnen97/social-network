import React from 'react';
import {Header} from "./Header/Header";
import {StoreType} from '../../../redux/store';
import {WallContainer} from './Wall/WallContainer';

type PropsType = {
    store: StoreType
}

export function Profile({store}: PropsType) {

    return (
        <div>
            <Header header={store.getState().profilePage.header}/>
            <WallContainer store={store}/>
        </div>
    );
}