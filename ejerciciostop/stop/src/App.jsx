import React, { useState } from 'react';
import Tabla from './components/Tabla';
import BotonAgregarCategoria from './components/BotonAgregarCategoria';
import BotonAgregarJugador from './components/BotonAgregarJugador';

function App() {
  const [categorias, setCategorias] = useState(['Nombre', 'Animal', 'Color']);
  const [jugadores, setJugadores] = useState([
    { jugador: 'Jugador 1', valores: ['', '', ''] },
    { jugador: 'Jugador 2', valores: ['', '', ''] }
  ]);

  const agregarCategoria = (nuevaCategoria) => {
    setCategorias([...categorias, nuevaCategoria]);
    setJugadores(jugadores.map(jugador => ({ ...jugador, valores: [...jugador.valores, ''] })));
  };

  const agregarJugador = () => {
    const nuevoJugador = { jugador: `Jugador ${jugadores.length + 1}`, valores: Array(categorias.length).fill('') };
    setJugadores([...jugadores, nuevoJugador]);
  };

  const manejarCambioEntrada = (indiceJugador, indiceCategoria, valor) => {
    const jugadoresActualizados = jugadores.map((jugador, jIndex) => {
      if (jIndex === indiceJugador) {
        const valoresActualizados = jugador.valores.map((val, cIndex) => (cIndex === indiceCategoria ? valor : val));
        return { ...jugador, valores: valoresActualizados };
      }
      return jugador;
    });
    setJugadores(jugadoresActualizados);
  };

  return (
    <div className="App">
      <h1>STOP</h1>
      <BotonAgregarCategoria onAgregarCategoria={agregarCategoria} />
      <BotonAgregarJugador onAgregarJugador={agregarJugador} />

      <Tabla categorias={categorias} jugadores={jugadores} manejarCambioEntrada={manejarCambioEntrada} />
    </div>
  );
}

export default App;
