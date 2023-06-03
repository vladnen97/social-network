import React from 'react';
import preloader from '../../../assets/preloader.gif';

export const PreLoader = () => {
    return (
        <div style={{width: '150px', margin: 'auto', marginTop: '300px'}}><img src={preloader} alt="fetching"/></div>
    )
}

