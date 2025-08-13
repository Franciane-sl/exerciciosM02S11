import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EquipamentosContext } from './EquipamentosContext';

export function EquipamentosProvider({ children }) {
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/equipamentos")
      .then(res => setEquipamentos(res.data))
      .catch(console.error);
  }, []);

  return (
    <EquipamentosContext.Provider value={{ equipamentos, setEquipamentos }}>
      {children}
    </EquipamentosContext.Provider>
  );
}