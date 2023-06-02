import { useState } from "react";
import RegistroContext from "../context/RegistroContext";

const RegistroProvider = ({ children }) => {
  let [resultado, setResultado] = useState(null);
  let [registro, setRegistro] = useState(null);

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
              alert("usuario registrado con exito");
            })
<<<<<<< HEAD
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => console.error(error));
  };
=======
              .then((respuesta) => respuesta.json())
              .then((data) => {
                alert('¡Te registraste con éxito! Ya puedes loguearte en nuestro sistema.');
              })
              .catch((error) => console.error(error));
          }
        })
        .catch((error) => console.error(error));
    }
>>>>>>> 9e36333d602d7b615d46ce4cb0370189584406c3

  return (
    <RegistroContext.Provider value={{ registrarse, resultado }}>
      {children}
    </RegistroContext.Provider>
  );
};

export default RegistroProvider;
