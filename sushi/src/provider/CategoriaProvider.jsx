import CategoriaContext from "./../context/CategoriaContext";
import { useState } from "react";

const CategoriaProvider = ({ children }) => {
  const [categoria, setCategoria] = useState(null);
  return (
    <CategoriaContext.Provider value={{ categoria, setCategoria }}>
      {children}
    </CategoriaContext.Provider>
  );
};
export default CategoriaProvider;
