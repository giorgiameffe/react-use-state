// Use State per generare variabili reattive
import { useState } from 'react';

// Importazione componente Card
import Card from '../Card.jsx';

// Funzione per il singolo bottone

export default function Button({ language, isActive, onToggle, className }) {

    // evento al click del bottone

    return (
        <div className="container">
            <button className={`button ${isActive ? 'button-yellow' : 'button-blue'}`} onClick={onToggle}>{language.title}</button>
            {isActive && <Card title={language.title} description={language.description} />}
        </div>
    );
}