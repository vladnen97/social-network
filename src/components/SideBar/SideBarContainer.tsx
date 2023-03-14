import React from 'react';
import {SideBar} from './SideBar';
import StoreContext from '../../storeContext';


export function SideBarContainer() {


    return (
        <StoreContext.Consumer>
            {
              store =>   <SideBar sideBar={store.getState().sideBar}/>
            }
        </StoreContext.Consumer>
    );
}