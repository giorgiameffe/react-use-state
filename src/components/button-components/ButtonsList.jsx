import Button from './Button.jsx';
// Funzione per lista di bottoni 

export default function ButtonsList({ languages }) {

    return (
        <div className="buttons-list">
            {languages.map(language => <Button key={language.id} language={language} />)}
        </div>
    );
}