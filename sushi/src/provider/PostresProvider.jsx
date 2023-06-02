import { useState, useEffect } from "react";
import PostresContext from "../context/PostresContext";

const PostresProvider = ({ children }) => {
  const [postres, setPostres] = useState([]);

  useEffect(() => {
    fetch("https://6474c6757de100807b1bb885.mockapi.io/postres")
      .then((respuesta) => respuesta.json())
      .then((data) => setPostres(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <PostresContext.Provider value={postres}>
      {children}
    </PostresContext.Provider>
  );
};
export default PostresProvider;
