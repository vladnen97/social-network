import React from 'react';
import s from './FollowBlock.module.css';
import {Divider} from 'antd';
import {ShortUserCard} from './ShortUserCard/ShortUserCard';

export function FollowBlock() {



    return (
        <div className={s.following}>
            <div className={s.followingHeader}>
                <h2>I'm Following</h2>
            </div>

            <Divider className={s.divider}/>

            <div className={s.users}>
                <ShortUserCard/>
                <ShortUserCard/>
                <ShortUserCard/>
            </div>
        </div>
    );
}