import { useState, useEffect } from "react";
import axios from "axios";

function UseGetInstruments() {
  const [equipamentos, setEquipamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get("http://localhost:3000/equipamentos")
      .then((res) => {
        setEquipamentos(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao carregar equipamentos.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { equipamentos, loading, error };
}

export default UseGetInstruments;