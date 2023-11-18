import { useState } from 'react';

function MyForm() {
    const [nome, setNome] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // O formulário não é enviado para outra página
        alert(`O nome digitado foi: ${nome}`)// Quando apertar em enviar aparece isso
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Digite seu nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <input type="submit" />    
            </form>
            <p>Você está digitando: {nome}</p>
        </div>
    )
}

export default MyForm
