// Use State per generare variabili reattive
import { useState } from 'react';

// Card
import Card from '../Card.jsx';

// Funzione per il singolo bottone

export default function Button({ language, isActive, onToggle }) {

    // evento al click del bottone

    return (
        <div className="button">
            <button onClick={onToggle}>{language.title}</button>
            {isActive && <Card description={language.description} />}
        </div>
    );
}