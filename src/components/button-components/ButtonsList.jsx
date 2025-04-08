// Use State per generare variabili reattive
import { useState } from 'react';

// Importazione componente bottone
import Button from './Button.jsx';

// Funzione per lista di bottoni 

export default function ButtonsList({ languages }) {

    const [activeButton, setActiveButton] = useState(null);

    // settare bottone con il valore dell'identificativo su cui ho cliccato 

    return (
        <div className="buttons-list">
            {languages.map(language => <Button key={language.id}
                language={language} isActive={activeButton === language.id}
                onToggle={() => setActiveButton(activeButton === language.id ? null : language.id)} />)}
        </div>
    );
}