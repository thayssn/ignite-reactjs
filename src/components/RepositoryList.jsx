import React, { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

const githubApi = 'https://api.github.com/orgs/rocketseat/repos';

export function RepositoryList(){

    const [ repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch(githubApi)
        .then(response => response.json())
        .then(data => 
            setRepositories(data)
        )
    }, []);

    return (
        <section className="repository-list">
            <h2>Lista de repositórios</h2>
            <ul>
                { repositories.map(repository => <RepositoryItem repository={repository} key={repository.id} /> )}
            </ul>
        </section>
    )
}