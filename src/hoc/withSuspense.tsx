import React, {ComponentType, Suspense} from 'react';
import {PreLoader} from '../components/Content/Users/PreLoader';

export function withSuspense(Component: ComponentType) {

    return () => {
        return (
            <Suspense fallback={<PreLoader/>}>
                <Component/>
            </Suspense>
        )
    }
}