import { Form } from 'antd';
import React from 'react';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
}

export const makeField = (Component: any) => ({input, hasFeedback, label, children, meta: {touched, error, invalid}, ...rest}: any) => {
    const hasError = touched && invalid;
    return (
        <Form.Item
            {...formItemLayout}
            label={label}
            validateStatus={hasError ? "error" : "success"}
            hasFeedback={hasFeedback && hasError}
            help={hasError && error}
        >
            <Component {...input} {...rest} children={children}/>
        </Form.Item>
    )
}