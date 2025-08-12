import { useContext } from "react";
import EquipamentosLista from "../../Components/Equipamentoslista";
import {EquipamentosContext} from "../../Contexts/EquipamentosContext";
import style from "./ListaDeInstrumentosEmCards.module.css";



function ListaDeInstrumentosEmCards() {

  const { equipamentos } = useContext(EquipamentosContext);

  
  return (
    <>
      <article className={style.cards}>
        <h2>Lista de Instrumentos</h2>
        <section className={style.cards_instrumentos}>
          {equipamentos.map((equipamento) => (
            <EquipamentosLista
            key = {equipamento.id}
            equipamento = {equipamento}  
            />
          )
        )}
        </section>
      </article>
    </>
  );
}

export default ListaDeInstrumentosEmCards;
