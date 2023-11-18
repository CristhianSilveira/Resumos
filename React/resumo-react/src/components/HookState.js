import { useState } from "react"

function HookState() {
    // [estadoAtual, função] = useState(valor);
    const [cor, setCor] = useState("vermelho");
    return ( 
    <div>
        <h3>useState:</h3>
        <p>Minha cor favorita é {cor}!</p>
        <button
            type="button"
            onClick={() => setCor("azul")}
            >Azul</button>
    </div>
    )
}

export default HookState