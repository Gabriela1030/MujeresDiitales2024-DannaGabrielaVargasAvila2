import React from 'react';

function BotonAgregarJugador({ onAgregarJugador }) {
  return (
    <button onClick={onAgregarJugador}>
      Agregar Jugador/Ronda
    </button>
  );
}

export default BotonAgregarJugador;
