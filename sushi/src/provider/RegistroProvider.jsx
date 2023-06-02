import { useState } from "react";
import RegistroContext from "../context/RegistroContext";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const RegistroProvider = ({ children }) => {
  const { setAuth } = useContext(AuthContext);
  const { addUser } = useContext(UserContext);

  const registrarse = (name, email, password) => {
    fetch("https://646d81b19c677e23218a0f68.mockapi.io/users")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        let elemento = data.find((data) => data.email == email);
        if (elemento) {
          alert("El correo ya se encuentra registrado, intente nuevamente");
        } else {
          fetch("https://646d81b19c677e23218a0f68.mockapi.io/users", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              { name: name, email: email, password: password },
              null,
              2
            ),
          })
            .then((respuesta) => respuesta.json())
            .then((data) => {
              alert('¡Te registraste con éxito! Ya puedes loguearte en nuestro sistema.');
              setAuth(null);
              addUser(email);
            })
            .catch((error) => console.error(error));
          }
        })
        .catch((error) => console.error(error));
    }

  return (
    <RegistroContext.Provider value={{ registrarse }}>
      {children}
    </RegistroContext.Provider>
  );
};

export default RegistroProvider;
