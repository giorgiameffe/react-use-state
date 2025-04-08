// Funzione per il singolo bottone

export default function Button({ language }) {

    return (
        <div className="button">
            <button>{language.title}</button>
        </div>
    );
}