import { useState, useMemo } from "react";

function HookMemo() {

    const [conta, setConta] = useState(0);
    const [todos, setTodos] = useState([]);
    const calcula = useMemo(() => expensiveCalcula(conta), [conta]);

  const incremento = () => {
    setConta((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "Nova Todo"]);
  };

  return (
    <div>
        <div>
        <h3>useMemo:</h3>
        <h2>Minhas Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Adicionar Todo</button>
      </div>
      <hr />
      <div>
        Conta: {conta}
        <button onClick={incremento}>+</button>
        <h2>Expensive Calculation</h2>
        {calcula}
      </div>
    </div>
  );
};

const expensiveCalcula = (num) => {
  console.log("Calculando...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

export default HookMemo