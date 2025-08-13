import style from "./EquipamentosLista.module.css";

function EquipamentosLista ({equipamento}) {

  function moneyFormat(value){
    return value.toLocaleString('pt-BR', { 
      style: 'currency', currency: 'BRL',
     });

  }
 
  return (
    <>
      <section className={style.cardEquipamentos}>
        <h3>{equipamento.nome}</h3>
        <p><strong>Tipo:</strong> {equipamento.tipo}</p>
        <p><strong>Marca:</strong> {equipamento.marca}</p>
        <p><strong>Voltagem:</strong> {equipamento.voltagem}</p>
        <p><strong>Ano:</strong> {equipamento.ano}</p>
        <span><strong>Preço:</strong> {moneyFormat(equipamento.preco)}</span>
        <p><strong>Peso:</strong> {equipamento.peso_kg} kg</p>
        <p><strong>Status:</strong>{" "}
        <spam className={equipamento.ativo ? style.statusAtivo : style.statusInativo} >
          {equipamento.ativo ? "Ativo" : "Inativo"}
          </spam> 
        </p>
      </section>
    </>
  );
}

export default EquipamentosLista;
