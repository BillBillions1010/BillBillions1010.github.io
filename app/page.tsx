import { Main } from 'next/document';
import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

export default function Homepage () {
    return (<>
        <Header 
            brand='billbillions'
        />
        <Main>
            <div className='block w-100'>
                <h1>Homepage</h1> 
            </div>
        </Main>
        <footer>
            <div className='block w-100'>
                <h1>Footer</h1>
            </div>
        </footer>
    </>
    );
}

