// Use State per generare variabili reattive
import { useState } from 'react';

// Importazione componente bottone
import Button from './Button.jsx';

// Funzione per lista di bottoni 

export default function ButtonsList({ languages }) {

    const [activeButton, setActiveButton] = useState(null);

    if (!languages.length) {
        return <div className='not-found'>Nessun elemento trovato</div>
    }

    // settare bottone con il valore dell'identificativo su cui ho cliccato 

    return (
        <div className="buttons-container">
            {languages.map(language => <Button key={language.id}
                language={language} isActive={activeButton === language.id}
                onToggle={() => setActiveButton(activeButton === language.id ? null : language.id)} />)}
        </div>
    );
}