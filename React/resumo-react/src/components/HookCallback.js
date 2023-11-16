import { useState, useCallback } from "react";
import { memo } from "react";

const HookCallback = () => {
  const [conta, setConta] = useState(0);
  const [todos, setTodos] = useState([]);

  const Todos = ({ todos, addTodo }) => {
    console.log("child renderizado");
    return (
      <>
        <h2>Minhas Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Adicionar Todo</button>
      </>
    );
};
    
  const incremento = () => {
    setConta((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "Nova Todo"]);
  }, [todos]);  
    
  return (
    <>
      <h3>HookCallback:</h3>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Contagem: {conta}
        <button onClick={incremento}>+</button>
      </div>
    </>
  );
};
  
export default memo(HookCallback);
  
  