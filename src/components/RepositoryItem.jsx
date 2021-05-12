import React from 'react';

export function RepositoryItem( { repository }){
    return (
        <li>
            <h3>{ repository?.name ?? 'Repositório Padrão' }</h3>
            <p>{ repository?.description ?? 'Descrição padrão' } </p>
            <a href={ repository?.link }>
                Acessar repositório
            </a>
        </li>
    )
}