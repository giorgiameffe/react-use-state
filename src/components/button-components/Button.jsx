// Use State per generare variabili reattive
import { useState } from 'react';

// Card
import Card from '../Card.jsx';

// Funzione per il singolo bottone

export default function Button({ language }) {

    const [isClicked, setIsClicked] = useState(false);

    const toggle = () => {
        setIsClicked(prev => !prev);
    }

    // evento al click del bottone

    return (
        <div className="button">
            <button onClick={toggle}>{language.title}</button>
            {isClicked && <Card description={language.description} />}
        </div>
    );
}