import { useState, useEffect } from "react";
import BebidasContext from "../context/BebidasContext";

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    fetch("https://6474c6757de100807b1bb885.mockapi.io/bebidas")
      .then((respuesta) => respuesta.json())
      .then((data) => setBebidas(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BebidasContext.Provider value={bebidas}>
      {children}
    </BebidasContext.Provider>
  );
};
export default BebidasProvider;
