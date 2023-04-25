import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {Pagination} from 'antd';
import {User} from './User';
import s from './Users.module.css'

export const Users = (props: Omit<UsersPropsType, 'isFetching' | 'getUsers'>) => {

    return (
        <>
            <div className={s.container}>
                {
                    props.users.map(el => {

                        const onFollowClickHandler = () => {
                            props.setFollow(el.id)
                        }
                        const onUnFollowClickHandler = () => {
                            props.setUnFollow(el.id)
                        }

                        return <User key={el.id}
                                     id={el.id}
                                     name={el.name}
                                     status={el.status}
                                     followed={el.followed}
                                     photos={el.photos}
                                     isLoading={props.followingInProgress.indexOf(el.id) !== -1}
                                     onFollowClickHandler={onFollowClickHandler}
                                     onUnFollowClickHandler={onUnFollowClickHandler}/>
                    })}
            </div>

            <div className={s.pagination}>
                <Pagination
                    size={'default'}
                    total={props.totalCount}
                    showTotal={(total) => `Total ${total} items`}
                    defaultPageSize={12}
                    showTitle={false}
                    current={props.currentPage}
                    onChange={(page) => props.setCurrentPage(page)}
                    showSizeChanger={false}
                />
            </div>
        </>
    );
};

