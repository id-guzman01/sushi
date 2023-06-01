import { useState } from "react";
import RegistroContext from "../context/RegistroContext";

const RegistroProvider = ({children}) => {
    let [resultado,setResultado] = useState(null);
    let [registro,setRegistro] = useState(null);

    const registrarse = (name, email, password) => {
        fetch("https://646d81b19c677e23218a0f68.mockapi.io/users")
        .then((respuesta) => respuesta.json())
        .then((data) => {
          let elemento = data.find((data) => data.email == email);
          if(elemento){
            setResultado('El correo ya existe')
          }else{
            return fetch("https://646d81b19c677e23218a0f68.mockapi.io/users",{
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({name: name, email: email, password:password}, null, 2),
            })
              
          }
        }).then((respuesta) => respuesta.json())
        .then((data) => {
          setResultado('usuario registrado con exito');
        })
        .catch((error) => console.error(error));

    }

    return (
        <RegistroContext.Provider value={{ registrarse, resultado }}>
          {children}
        </RegistroContext.Provider>
      );
};

export default RegistroProvider;