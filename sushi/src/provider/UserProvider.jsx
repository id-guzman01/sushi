import React, { useState } from "react";
import UserContext from "../context/UserContext.jsx";


const UserProvider = ({ children }) => {
  const usuarios = [
    { name: "Eduardo", email: "correo@gmail.com", password: "password" },
  ];
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);


  let [userLog, setUserLog] = useState(null);
   const addUser = (correo ) => {
    setUserLog(userLog = correo);
   }
   const logOut = () => {
    setUserLog(null)
   }


  const login = (email, password) => {
    fetch("https://646d81b19c677e23218a0f68.mockapi.io/users")
      .then((response) => response.json())
      .then((usuarios) => {
        let encontrado = usuarios.find((usuario) => usuario.email === email);
        if (!encontrado) {
          alert("Usuario no encontrado");
        } else if (encontrado.password !== password) {
          alert("La clave no coincide");
        } else {
          alert("Bienvenido");
          addUser(email);
        }
      })
      .catch((error) => {
        setUser(null);
        setUserError(error.message);
        setUserSuccess(null);
      });
  };
  return (
    <UserContext.Provider
      value={{ user, userError, login, usuarios, userSuccess, addUser, logOut, userLog }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
  