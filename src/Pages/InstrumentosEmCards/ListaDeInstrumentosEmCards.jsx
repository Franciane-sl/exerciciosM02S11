import { useContext } from "react";
import EquipamentosLista from "../../Components/Equipamentoslista";
import {EquipamentosContext} from "../../Contexts/EquipamentosContext";



function ListaDeInstrumentosEmCards() {

  const { equipamentos } = useContext(EquipamentosContext);

  
  return (
    <>
      <article className="cards">
        <h2>Lista de Instrumentos</h2>
        <section className="cards_instrumentos">
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
