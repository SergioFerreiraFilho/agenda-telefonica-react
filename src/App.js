import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./HEADER/header";
import Adicionar from "./Adicionar/Adicionar"
import TabelaName from "./Tabela/Tabela";
import TabelaTag from "./Tabela/TabelaTag";




function App() {
  return (
    <div className="container">
    <Header/>
    <Adicionar/>
    <TabelaName/>
    <TabelaTag/>
    </div>
  );
}

export default App;
