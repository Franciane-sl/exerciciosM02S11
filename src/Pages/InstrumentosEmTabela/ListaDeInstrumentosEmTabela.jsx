import EquipamentosTabela from "../../Components/EquipamentosTabela/EquipamentosTabela.jsx";
import UseGetInstruments from "../../Hooks/UseGetInstruments.jsx";
import style from "./ListaDeInstrumentosEmTabela.module.css";

function ListaDeInstrumentosEmTabela() {

  const { equipamentos, loading, error } = UseGetInstruments();
  
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
 
  return (
    <>
      <article className={style.tabelaContainer}>
      <h2>Lista de Instrumentos</h2>
      <table>
        <thead className={style.tabela}>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Voltagem</th>
            <th>Ano</th>
            <th>Preço</th>
            <th>Status</th> 
          </tr>
        </thead>
        <tbody>
          {equipamentos.map((equipamento) => (
            <EquipamentosTabela
            key = {equipamento.id}
            equipamento = {equipamento}
            />
          )
        )}
        </tbody>
      </table>
    </article>
    </>
  );
}

export default ListaDeInstrumentosEmTabela;
