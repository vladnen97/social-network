import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';
import {Button} from 'antd';

export const Users = (props: Omit<UsersPropsType, 'isFetching' | 'getUsers'>) => {

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
                            props.setFollow(el.id)
                        }
                        const onUnFollowClickHandler = () => {
                            props.setUnFollow(el.id)
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
                                ? <Button size={'large'}
                                          onClick={onUnFollowClickHandler}
                                          disabled={props.followingInProgress.indexOf(el.id) !== -1}>
                                    Unfollow
                            </Button>
                                : <Button size={'large'}
                                          onClick={onFollowClickHandler}
                                          disabled={props.followingInProgress.indexOf(el.id) !== -1}>
                                    Follow
                                </Button>
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

