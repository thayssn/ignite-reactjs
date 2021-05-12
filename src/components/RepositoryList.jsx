import React from 'react';
import RepositoryItem from './RepositoryItem';

export default function RepositoryList(){
    return (
        <section className="repository-list">
            <h2>Lista de repositórios</h2>
            <ul>
                <RepositoryItem repository={{ name: 'Learning ReactJS', description: 'Aprendendo ReactJS', link: 'https://arenafortnite.com.br'}} />
                <RepositoryItem></RepositoryItem>
                <RepositoryItem repository={{ name: 'Learning NodeJS', description: 'Aprendendo NodeJS', link: 'https://arenafortnite.com.br'}} />
            </ul>
        </section>
    )
}