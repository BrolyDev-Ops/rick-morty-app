import React, { useEffect, useState } from "react";
import Navbar from "./componentes/Navbar";
import CharactersList from "./componentes/CharacterList";
import Paginacion from "./componentes/Paginacion";
import "./style/style.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  // initurl para saber que es la url inicial
  const initurl = "https://rickandmortyapi.com/api/character";

  // Procesamiento de los datos JSON al realizar la solicitud a la URl y actualiza la informacion y manda un mensaje de error si ocurriera
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  // Estas funciones realizaran la llamada de la API pero con la url que tenemos en "next" o "previos"
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initurl);
  }, []);

  return (
    // Botones de Next y Previous en la parte superior e inferior
    <>
      <Navbar />
      <div className="container">
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <CharactersList characters={characters} />
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}
export default App;
