// Array di oggetti 
import languagesList from '../data/languages.js';

// Importazione componente lista bottoni
import ButtonsList from './button-components/ButtonsList.jsx';


// Componente Main

export default function Main() {
    return (
        <main>
            <ButtonsList languages={languagesList} />
        </main>

    );
}
