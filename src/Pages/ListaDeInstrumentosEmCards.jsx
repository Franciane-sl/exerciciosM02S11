import { useEffect, useState } from "react";
import axios from "axios";
import EquipamentosLista from "../Components/Equipamentoslista";
import { toast } from "react-toastify";

function ListaDeInstrumentosEmCards() {
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3000/equipamentos")
    .then((response) => {
      setEquipamentos(response.data);
    })
    .catch(() => toast.error("Erro ao buscar os equipamentos"));
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
