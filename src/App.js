import "./App.css";
import React from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";

function App() {
  const [nome, setNome] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox options={['JavaScript', 'Java', 'Python']} value={linguagens} setValue={setLinguagens}/> 
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor}/>
      <Select
        options={["Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
    </form>
  );
}

export default App;
