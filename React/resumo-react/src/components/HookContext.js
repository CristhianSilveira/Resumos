import { useState, createContext, useContext } from "react"

const UserContext = createContext()

function HookContext() {
   
    const [user, setUser] = useState("Jennifer Lopez");

    return (
        <UserContext.Provider value={user}>
            <h3>useContext:</h3>
            
            <h1>{`Hello ${user}!`}</h1>
            <Componente2 user={user} />
        </UserContext.Provider>
    )
}

function Componente2() {
    return (
      <>
        <h1>Componente 2</h1>
        <Componente3 />
      </>
    );
  }
  
  function Componente3() {
    return (
      <>
        <h1>Componente 3</h1>
        <Componente4 />
      </>
    );
  }
  
  function Componente4() {
    return (
      <>
        <h1>Componente 4</h1>
        <Componente5 />
      </>
    );
  }
  
  function Componente5() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Componente 5</h1>
        <h2>{`Hello ${user} novamente!`}</h2>
      </>
    );
  }

export default HookContext