import React from 'react';
import {Header} from "./Header/Header";
import {Wall} from "./Wall/Wall";
import {StoreType} from '../../../redux/store';

type PropsType = {
    store: StoreType
}

export function Profile({store}: PropsType) {

    return (
        <div className={'profile'}>
            <Header header={store.getState().profilePage.header}/>
            <Wall store={store}/>
        </div>
    );
}