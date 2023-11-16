import { useState, useEffect } from "react"

function HookEffect() {

    const [contagem, setContagem] = useState(0);

    // useEffect( função , dependência)
    useEffect(() => {
        let tempo = setTimeout(() => {
          setContagem((contagem) => contagem + 1);
        }, 1000);

    return () => clearTimeout(tempo)
    }, []);
    

    return (
        <div>
            <h3>useEffect:</h3>
            <p>Eu renderizei {contagem} vez!</p>
        </div>
    )
}

export default HookEffect