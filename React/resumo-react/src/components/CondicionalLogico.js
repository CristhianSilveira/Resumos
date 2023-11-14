function CondicionalLogico(props) {
    
    const carros = props.carros;
    return (  
        <>
            <h2>Condicional Lógico</h2>
            
            {/* Se carros.length for maior que 0, a expressão após && é executada */}
            {carros.length > 0 &&
            <p>
                Eu tenho {carros.length} carros em minha garagem.
            </p>
            }
      </>
    );
}

export default CondicionalLogico