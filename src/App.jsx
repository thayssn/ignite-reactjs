import React from 'react';
import './styles/global.scss';

import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';

export function App(){
    return <>
        <h1>Github Explorer</h1>
        <RepositoryList />
        <Counter/>
    </>
}