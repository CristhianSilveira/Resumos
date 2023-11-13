import React from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //Router
import { useState } from "react";

import Fragments from "./components/Fragments";
import Carro from "./components/Carro";
import Condicional from "./components/Condicional";
import CondicionalLogico from "./components/CondicionalLogico";
import List from "./components/List";
import MyForm from "./components/MyForm";
import Style from "./components/Style";
import HookState from "./components/HookState";
import HookEffect from "./components/HookEffect";
import HookContext from "./components/HookContext";
import HookRef from "./components/HookRef";
import HookReducer from "./components/HookReducer";
import HookCallback from "./components/HookCallback";

// Router
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import HookMemo from "./components/HookMemo";


// Eventos
function gol() {
    alert("Foi gol do camisa 9!")
}
function shoot(e) {
  alert(e)
}

function App() {

  const x = 5;
  const garagem = ['Ford', 'BMW', 'Audi'];

  return (
    <div className="App">

      <h1>JSX:</h1>
      <p className="ClasseCSS">Eu tenho {5 + 5} bananas</p> {/* Expressões em JSX e classe*/}

      <h1>IF em JSX:</h1>
      <p>{(x) < 10 ? "Hello" : "Goodbye"}</p>

      <h1>Fragments(Fragmentos):</h1>
      <Fragments />

      <h1>Components(Componentes):</h1>
      <Carro /> {/* Renderizando Componente*/}
      <Carro cor="vermelho" marca="Audi" modelo="Lamborghini" /> {/* Props em Componente*/}
      
      <h1>Renderização  Condicional:</h1>
      <Condicional isGoal={false} />
  
      <CondicionalLogico carros={garagem} />

      <h1>Router(Rotas):</h1>
      <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} /> 
            <Route path="blogs" element={<Blogs />} /> 
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Routes> podem ser aninhados. */}
      
      {/* O primeiro <Route> possui um caminho / e renderiza o componente Layout. */}
      
      {/* A rota Home do componente não possui um caminho, mas possui um atributo index. Isso especifica esta rota como a rota padrão para a rota pai, que é /. */}
      
      {/* Os aninhados <Route> herdam e são adicionados à rota pai. Portanto, o caminho blogs é combinado com o pai e se torna /blogs. */}
      
      {/* Definir como path * funcionará como um genérico para quaisquer URLs indefinidos. Isso é ótimo para uma página de erro 404. */}

      <h1>Events(Eventos):</h1>
      <button onClick={gol}>Quem marcou o gol?</button>
      <button onClick={() => shoot("Golaço!")}>Gol bonito?</button> {/* Passando argumento */}

      <h1>Lists(Listas):</h1>
      <List />

      <h1>Forms(Formulários):</h1>
      <MyForm />

      <h1>Style(Estilo):</h1>
      <Style />

      <h1>Hooks:</h1>
      <HookState />
      <HookEffect />
      <HookContext />
      <HookRef />
      <HookReducer />
      <HookCallback />
      <HookMemo />
    </div>
  );
}

export default App;
