import { Main } from 'next/document';
import React from 'react';
import Header from '../components/Header/Header';

export default function Homepage () {
    return (<>
        <Header 
            brand='billbillions'
        />
        <Main />
        <div className='block w-100'>
            <h1>Homepage</h1> 
        </div>
    </>
    );
}

