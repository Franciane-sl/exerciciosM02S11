import { useContext } from "react";
import EquipamentosLista from "../Components/Equipamentoslista";
import {EquipamentosContext} from "../Contexts/EquipamentosContext";



function ListaDeInstrumentosEmCards() {

  const { equipamentos } = useContext(EquipamentosContext);

  
  return (
    <>
      <article>
        <h2>Lista de Instrumentos</h2>
        <section>
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
