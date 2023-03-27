import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';

export function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items)
            })
    }

    const mappedUsers = props.users.map(el => {

        const onFollowClickHandler = () => {
            props.onFollowClick(el.id)
        }
        const onUnFollowClickHandler = () => {
            props.onUnFollowClick(el.id)
        }

        return <div key={el.id} style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <img style={{width: '80px', height: '80px', borderRadius: '50%'}}
                 src={el.photos.small || 'https://placehold.jp/150x150.png'} alt=""/>
            <div style={{textAlign: 'center'}}>
                <h2>{el.name}</h2>
                <div style={{fontSize: '17px', margin: '10px 5px'}}><em>{el.status || 'status...'}</em></div>
            </div>
            {el.followed
                ? <button onClick={onUnFollowClickHandler}>Unfollow</button>
                : <button onClick={onFollowClickHandler}>Follow</button>
            }
        </div>
    })


    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {mappedUsers}
        </div>
    );
}

