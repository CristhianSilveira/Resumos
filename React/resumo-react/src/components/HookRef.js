import { useRef } from "react"

function HookRef() {
    const inputElement = useRef();

    const FocaInput = () => {
        inputElement.current.focus();
    };

    return (
        <div>
            <h3>useRef:</h3>
            <input type="text" ref={inputElement} />
            <button onClick={FocaInput}>Focar no Input</button>
        </div>
    )
}

export default HookRef