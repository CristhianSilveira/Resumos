function GolPerdido() {
	return <p>FALHOU!</p>;
}

function GolValido() {
	return <p>GOL!</p>;
}

function Condicional(props) {
    const isGoal = props.isGoal;
	return (
        <>
            <h2>Condicional Ternário</h2>
			{ isGoal ? <GolValido/> : <GolPerdido/> }
		</>
	);
}

export default Condicional