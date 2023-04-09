import React from 'react';
import {UsersPropsType} from './UsersContainer';

export const Users = (props: Omit<UsersPropsType, 'setUsers' | 'setTotalUsersCount'>) => {

    const pagesCount = Math.ceil(props.totalCount / props.limit)
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
            <div style={ {paddingTop: '40px', display: 'flex', justifyContent: 'center', gap: '14px', fontSize: '21px', alignItems: 'baseline'} }>
                {
                    pages.map(el => <span key={el} style={props.currentPage === el ? {fontSize: '25px', fontWeight: 'bold', cursor: 'pointer'} : {cursor: 'pointer'}} onClick={() => props.onPageClick(el)}>{el}</span>).slice(0,10)
                }
            </div>
        </>
    );
};

