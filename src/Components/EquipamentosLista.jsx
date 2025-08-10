function EquipamentosLista ({equipamento}) {

  function moneyFormat(value){
    return value.toLocaleString('pt-BR', { 
      style: 'currency', currency: 'BRL',
     });

  }
 
  return (
    <>
      <section>
        <h3>{equipamento.nome}</h3>
        <p>Tipo: {equipamento.tipo}</p>
        <p>Marca: {equipamento.marca}</p>
        <p>Voltagem: {equipamento.voltagem}</p>
        <p>Ano: {equipamento.ano}</p>
        <span> Preço: {moneyFormat(equipamento.preco)}</span>
        <p>Peso: {equipamento.peso_kg} kg</p>
        <p>Status: {equipamento.ativo ? "Ativo" : "Inativo"}</p>
      </section>
    </>
  );
}

export default EquipamentosLista;
