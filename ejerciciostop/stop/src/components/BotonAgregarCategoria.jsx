import React from 'react';

function BotonAgregarCategoria({ onAgregarCategoria }) {
  const manejarAgregarCategoria = () => {
    const nuevaCategoria = prompt('Ingrese el nombre de la nueva categoría:');
    if (nuevaCategoria) {
      onAgregarCategoria(nuevaCategoria);
    }
  };

  return (
    <button onClick={manejarAgregarCategoria}>
      Agregar Categoría
    </button>
  );
}

export default BotonAgregarCategoria;
