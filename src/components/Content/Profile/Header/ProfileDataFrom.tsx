import React from 'react';
import {makeField} from '../../../../hoc/makeField';
import {Alert, Button, Checkbox, Input} from 'antd';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileFormDataType} from './Header';
import {required} from '../../../../utils/validators';

const {TextArea} = Input
const AInput = makeField(Input)
const ACheckbox = makeField(Checkbox)
const ATextArea = makeField(TextArea)
const InputReq = required(true)
const TextAreaReq = required(false)


const ProfileDataFrom = (props: InjectedFormProps<ProfileFormDataType>) => {
    return (
        <>
            <div style={{minHeight: '55px'}}>
                {props.error && <Alert
                message={props.error}
                type="error"
                showIcon
                closable
            />}
            </div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'fullName'}
                       label={'Name'}
                       component={AInput}
                       validate={[InputReq]}
                       size={'middle'}/>
                <Field name={'aboutMe'}
                       label={'about Me'}
                       component={ATextArea}
                       validate={[TextAreaReq]}
                       rows={3}
                       size={'middle'}/>
                <Field name={'lookingForAJob'}
                       label={'Looking for a job'}
                       component={ACheckbox}
                       size={'middle'}
                       type="checkbox"/>
                <Field name={'lookingForAJobDescription'}
                       label={'My professional skills'}
                       component={ATextArea}
                       validate={[TextAreaReq]}
                       rows={3}
                       size={'middle'}/>

                <Field name={'vk'}
                       label={'VK'}
                       component={AInput}
                       size={'middle'}/>
                <Field name={'facebook'}
                       label={'Facebook'}
                       component={AInput}
                       size={'middle'}/>
                <Field name={'github'}
                       label={'Github'}
                       component={AInput}
                       size={'middle'}/>
                <Field name={'twitter'}
                       label={'Twitter'}
                       component={AInput}
                       size={'middle'}/>
                <Field name={'instagram'}
                       label={'Instagram'}
                       component={AInput}
                       size={'middle'}/>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button size={'middle'}
                            htmlType={'submit'}
                            shape={'round'}
                            type={'primary'}
                            disabled={props.pristine || props.submitting}>
                        Save
                    </Button>
                </div>
            </form>
        </>
    );
};

export default reduxForm<ProfileFormDataType>({form: 'edit-profile'})(ProfileDataFrom)
