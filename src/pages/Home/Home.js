import "./styles.css";
import seta from '../../assets/img/seta.png'
export default function Home() {
  return (
    <div className="container">
      <h1 className="titulo">Seja bem-vindo(a)</h1>
      <div className="cargos">
        <p>Cargos</p>
        <img className="seta" src={seta} alt="seta" />
      </div>
    </div>
    
  );
}
