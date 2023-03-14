import React from 'react';
import StoreContext from '../../../../storeContext';
import {Header} from "./Header";



export function HeaderContainer() {

    return (
        <StoreContext.Consumer>
            {
               store =>  <Header header={store.getState().profilePage.header}/>
            }
        </StoreContext.Consumer>
    )
}