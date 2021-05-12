import React, { useState } from 'react';

// Conceito de Imutabilidade

// Não podemos alterar diretamente uma variável.
// Devemos atribuir um novo valor a ela.

// let array = ['thays'];
// Errado:  array.push('mari') 
// Correto: [...array, 'mari']

export function Counter() {
    const [ counter, setCounter ] = useState(0);
    
    function increment(){
        setCounter(counter + 1);
    }

    function decrement(){
        if(counter > 0)
            setCounter(counter - 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Incrementar</button>
            <button type="button" onClick={decrement}>Diminuir</button>
        </div>
    )
}