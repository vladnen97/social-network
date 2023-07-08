import React, {ChangeEvent, useState} from 'react';
import s from './Header.module.css'
import {MainAvatar} from './HeaderComp/MainAvatar';
import {MainName} from './HeaderComp/MainName';
import {MainStatus} from './HeaderComp/MainStatus';
import {HeaderPropsType} from './HeaderContainer';
import {Button, Modal} from 'antd';
import UpdateProfileDataFrom from './ProfileDataFrom';
import {UpdateProfileData} from '../../../../api/api';

export type ProfileFormDataType = {
    fullName: string
    lookingForAJob: boolean
    aboutMe: string
    lookingForAJobDescription: string
    vk: string
    github: string
    facebook: string
    instagram: string
    twitter: string
}

export function Header({header, status, updateStatus, uploadPhoto, match, updateProfileData}: HeaderPropsType) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        uploadPhoto(e.target.files?.[0])
    }

    const onSubmit = (formData: ProfileFormDataType) => {
        const model: UpdateProfileData = {
            userId: header.userId,
            fullName: formData.fullName,
            aboutMe: formData.aboutMe,
            lookingForAJob: formData.lookingForAJob || header.lookingForAJob,
            lookingForAJobDescription: formData.lookingForAJobDescription,
            contacts: {
                ...header.contacts,
                vk: formData.vk || header.contacts.vk,
                github: formData.github || header.contacts.github,
                facebook: formData.facebook || header.contacts.facebook,
                instagram: formData.instagram || header.contacts.instagram,
                twitter: formData.twitter || header.contacts.twitter
            }
        }
        updateProfileData(model)
    }

    return (
        <div className={s.header}>
            <div className={s.cover}></div>
            <div className={s.inner}>
                <MainAvatar online={false} url={header.photos?.large}/>
                <div className={s.info}>

                    <MainName name={header?.fullName}/>
                    <MainStatus status={status} updateStatus={updateStatus}/>

                    <div className={s.fullInfo}>
                        <Button type="primary" onClick={() => {
                            setIsModalOpen(true)
                        }} shape={'round'} size={'middle'}>
                            Learn more
                        </Button>
                        <Modal title="Additional info"
                               visible={isModalOpen}
                               width={800}
                               onCancel={() => {
                                   setIsModalOpen(false)
                                   setEditMode(false)
                               }}
                               footer={!match.params.userId
                                   ? [
                                       <Button key="back" onClick={() => {
                                           setIsModalOpen(false)
                                           setEditMode(false)
                                       }} shape={'round'}>
                                           Cancel
                                       </Button>,
                                       <Button key="edit" type="primary" shape={'round'} onClick={() => {
                                           setEditMode(true)
                                           editMode
                                               ? setEditMode(false)
                                               : setEditMode(true)
                                       }}>
                                           Edit
                                       </Button>]
                                   : [<Button key="back" onClick={() => setIsModalOpen(false)}
                                              shape={'round'}>Cancel</Button>]}>
                            {!editMode
                                ?
                                <div style={{fontSize: '21px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                    <div>id: {header?.userId || '---'}</div>
                                    <div>name: {header?.fullName || '---'}</div>
                                    <div>about: {<i>{header?.aboutMe}</i> || '---'}</div>
                                    <div>looking for a job: {header?.lookingForAJob ? 'Yes' : 'No'}</div>
                                    <div>My professional skills: {
                                        <i>{header?.lookingForAJobDescription}</i> || '---'}</div>
                                    <ul>
                                        <li>vk: {header?.contacts?.vk || '---'}</li>
                                        <li>facebook: {header?.contacts?.facebook || '---'}</li>
                                        <li>github: {header?.contacts?.github || '---'}</li>
                                        <li>twitter: {header?.contacts?.twitter || '---'}</li>
                                        <li>instagram: {header?.contacts?.instagram || '---'}</li>
                                    </ul>
                                </div>
                                : <UpdateProfileDataFrom
                                    onSubmit={onSubmit}
                                    initialValues={{
                                        fullName: header?.fullName,
                                        aboutMe: header.aboutMe,
                                        lookingForAJob: header.lookingForAJob,
                                        lookingForAJobDescription: header.lookingForAJobDescription,
                                        vk: header.contacts.vk,
                                        github: header.contacts.github,
                                        facebook: header.contacts.facebook,
                                        instagram: header.contacts.instagram,
                                        twitter: header.contacts.twitter
                                    }}/>}
                        </Modal>
                    </div>
                </div>
                {!match.params.userId && <label>
                    Upload profile photo <br/>
                    <input type="file" onChange={onPhotoSelected}/>
                </label>}
            </div>
        </div>
    );
}