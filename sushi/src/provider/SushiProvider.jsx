import { useState, useEffect } from "react";
import SushiContext from "../context/SushiContext";

const SushiProvider = ({ children }) => {
  const [sushi, setSushi] = useState([]);

  useEffect(() => {
    fetch("https://646d81b19c677e23218a0f68.mockapi.io/food")
      .then((respuesta) => respuesta.json())
      .then((data) => setSushi(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <SushiContext.Provider value={sushi}>{children}</SushiContext.Provider>
  );
};
export default SushiProvider;
