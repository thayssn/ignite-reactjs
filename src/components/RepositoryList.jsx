import React from 'react';
const repositoryName = 'Unform2';

export default function RepositoryList(){
    return (
        <section className="repository-list">
            <h2>Lista de repositórios</h2>

            <ul>
                <li>
                    <h3>{ repositoryName}</h3>
                    <p>Forms in React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <h3>unform</h3>
                    <p>Forms in React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <h3>unform</h3>
                    <p>Forms in React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
            </ul>
        </section>
    )
}