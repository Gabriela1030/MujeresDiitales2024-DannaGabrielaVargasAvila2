import React from 'react';
import CeldaEntrada from './CeldaEntrada';

function Tabla({ categorias, jugadores, manejarCambioEntrada }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Jugador</th>
          {categorias.map((categoria, index) => (
            <th key={index}>{categoria}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {jugadores.map((jugador, indiceJugador) => (
          <tr key={indiceJugador}>
            <td>{jugador.jugador}</td>
            {jugador.valores.map((valor, indiceCategoria) => (
              <td key={indiceCategoria}>
                <CeldaEntrada
                  valor={valor}
                  onChange={(e) => manejarCambioEntrada(indiceJugador, indiceCategoria, e.target.value)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
