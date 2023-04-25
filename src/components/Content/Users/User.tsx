import React from 'react';
import {NavLink} from 'react-router-dom';
import {Avatar, Button, Typography } from 'antd';
import s from './User.module.css'

const {Text, Title} = Typography

type UserPropsType = {
    id: number,
    name: string,
    status: string | null,
    photos: { small: string | null, large: string | null },
    followed: boolean
    onFollowClickHandler: () => void
    onUnFollowClickHandler: () => void
    isLoading: boolean
}

export const User = (props: UserPropsType) => {
    return (
        <div className={s.userContainer}>
            <div className={s.inner}>
                <Avatar size={72} src={props.photos.small || 'https://placehold.jp/150x150.png'}/>
                <div className={s.info}>
                    <NavLink to={'/profile/' + props.id} className={s.link}>
                        <Title level={4} style={{margin: '0'}}>{props.name}</Title>
                    </NavLink>
                    <Text type={'secondary'} style={{fontSize: '1rem'}}>
                        {props.status || 'status...'}
                    </Text>
                </div>
            </div>
            <Button size={'large'}
                    onClick={props.followed ? props.onUnFollowClickHandler : props.onFollowClickHandler}
                    loading={props.isLoading}
                    disabled={props.isLoading}
                    shape={'round'}>
                {props.followed ? 'Unfollow' : 'Follow'}
            </Button>
        </div>
    );
};

