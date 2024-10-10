import React from 'react';

function CeldaEntrada({ valor, onChange }) {
  return (
    <input
      type="text"
      value={valor}
      onChange={onChange}
    />
  );
}

export default CeldaEntrada;
