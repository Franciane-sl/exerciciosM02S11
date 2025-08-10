import { useEffect, useState } from "react";
import axios from "axios";
import EquipamentosLista from "../Components/Equipamentoslista";

function ListaDeInstrumentosEmCards() {
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3000/equipamentos")
    .then((response) => {
      setEquipamentos(response.data);
    })
    .catch((error) => {
      console.error("Erro ao buscar equipamentos:", error);
    });
  }, []);
 
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
