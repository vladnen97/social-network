import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {v1} from 'uuid';

export function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                followed: false,
                fullName: 'Vladislav',
                status: 'Im a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                followed: true,
                fullName: 'Dmitry',
                status: 'I like football',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Oksana',
                status: 'Im pretty',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    const mappedUsers = props.users.map(el => {

        const onFollowClickHandler = () => {
            props.onFollowClick(el.id)
        }
        const onUnFollowClickHandler = () => {
            props.onUnFollowClick(el.id)
        }

        return <div key={el.id} style={ {backgroundColor: '#fff', borderRadius: '20px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'} }>
            <div>
                <h2>{el.fullName}</h2>
                <div style={{fontSize: '17px', margin: '10px 5px'}}><em>{el.status}</em></div>
            </div>
            <div>
                <div>{el.location.country}</div>
                <div>{el.location.city}</div>
            </div>
            {el.followed
                ? <button onClick={onUnFollowClickHandler}>Unfollow</button>
                :  <button onClick={onFollowClickHandler}>Follow</button>
            }
        </div>
    })


    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {mappedUsers}
        </div>
    );
}

