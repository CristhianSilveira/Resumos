function Car(props) {
    return <li>Eu tenho um { props.marca }</li>;
}

function List() {
    const carros = [
        { id: 1, marca: 'Ford'},
        { id: 2, marca: 'BMW' },
        { id: 3, marca: 'Audi' }
    ];
    return (
        <div>
            <h3>Qual carro está na minha garagem?</h3>
            <ul>
                {carros.map((carro) =>
                        <Car key={carro.id} marca={carro.marca} />
                )}
            </ul>
        </div>
    )
}
// As chaves(key) permitem que o React acompanhe os elementos. Dessa forma, se um item for atualizado ou removido, apenas esse item será renderizado novamente, em vez de toda a lista


export default List