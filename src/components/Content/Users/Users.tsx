import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export const Users = (props: Omit<UsersPropsType, 'setUsers' | 'setTotalUsersCount' | 'isFetching' | 'setIsFetching'>) => {

    const pagesCount = Math.ceil(props.totalCount / 6)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages[i-1] = i
    }


    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '778px'}}>
                {
                    props.users.map(el => {

                        const onFollowClickHandler = () => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "31f53cca-e0c7-46c1-88c3-71665c47f40c"
                                }
                            })
                                .then((res)=> {
                                    if (res.data.resultCode === 0) props.follow(el.id)
                                })
                        }
                        const onUnFollowClickHandler = () => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "31f53cca-e0c7-46c1-88c3-71665c47f40c"
                                }
                            })
                                .then((res)=> {
                                    if (res.data.resultCode === 0) props.unfollow(el.id)
                                })
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
                                <NavLink to={'/profile/' + el.id}>
                                    <h2>{el.name}</h2>
                                </NavLink>
                                <div style={{fontSize: '17px', margin: '10px 5px'}}>
                                    <em>{el.status || 'status...'}</em>
                                </div>
                            </div>
                            {el.followed
                                ? <button onClick={onUnFollowClickHandler}>Unfollow</button>
                                : <button onClick={onFollowClickHandler}>Follow</button>
                            }
                        </div>
                    })}
            </div>
            <div style={ {paddingTop: '25px', display: 'flex', justifyContent: 'center', gap: '14px', fontSize: '21px', alignItems: 'baseline'} }>
                {
                    pages.map(el => <span key={el} style={props.currentPage === el ? {fontSize: '25px', fontWeight: 'bold', cursor: 'pointer'} : {cursor: 'pointer'}} onClick={() => props.setCurrentPage(el)}>{el}</span>).slice(0,10)
                }
            </div>
        </>
    );
};

