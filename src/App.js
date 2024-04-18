import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from'./components/Pessoa';
import Frase from './components/Frase'
function App() {
const nome = 'Maurizio'
  return (
    <div className="App">
      <h1> TESTE CSS </h1>
      <Frase/>
      <Frase/>
      <Frase/>
      <SayMyName nome = 'Maureco' />
      <SayMyName nome = 'Mauricio' />
      <SayMyName nome = {nome}/>
      <Pessoa
       nome= 'MauMau' idade= '21' profissao= 'programador' foto='https://via.placeholder.com/150'/>
    </div>
  );
}

export default App;
