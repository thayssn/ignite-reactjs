import React from 'react';

export function RepositoryItem( { repository }){
    return (
        <li>
            <h3>{ repository.name }</h3>
            <p>{ repository.description } </p>
            <a href={ repository.html_url }>
                Acessar repositório
            </a>
        </li>
    )
}