import style from './EquipamentosTabela.module.css';

function EquipamentosTabela ({equipamento}) {

  function moneyFormat(value){
    return value.toLocaleString('pt-BR', { 
      style: 'currency', currency: 'BRL',
     });

  }
 
  return (
    <>
     <tr className={style.tabelaLinha}>
      <td>{equipamento.nome}</td>
      <td>{equipamento.tipo}</td>
      <td>{equipamento.marca}</td>
      <td>{equipamento.voltagem}</td>
      <td>{equipamento.ano}</td>
      <td>{moneyFormat(equipamento.preco)}</td>
      <td>{equipamento.ativo ? "Ativo" : "Inativo"}</td>
    </tr> 
    </>
  );
}

export default EquipamentosTabela;
