import React from 'react';
import {addPostActionCreator, ChangeNewPostTextActionCreator} from '../../../../redux/profileReducer';
import StoreContext from '../../../../storeContext';
import {Wall} from './Wall';


export function WallContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const profilePage = store.getState().profilePage;

                    const addPost = (): void => {
                        store.dispatch(addPostActionCreator());
                    }
                    const onChangeText = (value: string): void => {
                        store.dispatch(ChangeNewPostTextActionCreator(value));
                    }

                    return <Wall posts={profilePage.posts}
                                 addPost={addPost}
                                 onChangeText={onChangeText}
                                 postTextValue={profilePage.postTextValue}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

