import { useNavigate } from "react-router-dom";
import style from "./BotaoNavegacao.module.css";

function BotaoNavegacao() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <button 
        className={style.btn}
        onClick={() => navigate("/")}
      >
        Listagem em Cards
      </button>

      <button 
        className={style.btn}
        onClick={() => navigate("/listaemtabela")}
      >
        Listagem em Tabela
      </button>
    </div>
  );
}

export default BotaoNavegacao;
