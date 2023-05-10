import React from 'react';

export const makeField = (Component: any) => ({ input, children, ...rest }: any) => {
    return (
        <Component {...input} {...rest} children={children} />
    )
}