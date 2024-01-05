import React from "react";

const Paginacion = ({ prev, next, onPrevious, onNext }) => {
  const Previous = () => {
    onPrevious();
  };

  const Next = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? ( // si existe un link de Previous me mostrara el boton de previous, en caso contrario no mostrara el boton
          <li className="page-item">
            <button className="page-link" onClick={Previous}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? ( // Mismo caso anterior ahora para Next
          <li className="page-item">
            <button className="page-link" onClick={Next}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Paginacion;
