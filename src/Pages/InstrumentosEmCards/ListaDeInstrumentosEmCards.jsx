import EquipamentosLista from "../../Components/EquipamentosLista/EquipamentosLista.jsx";
import UseGetInstruments from "../../Hooks/UseGetInstruments.jsx";
import style from "./ListaDeInstrumentosEmCards.module.css";


function ListaDeInstrumentosEmCards() {

  const { equipamentos, loading, error } = UseGetInstruments();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

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
