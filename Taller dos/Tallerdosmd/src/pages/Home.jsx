import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Manilla Pandora', description: 'Description 1', price: 500.000, image: 'https://i.pinimg.com/550x/a5/58/de/a558de4fd1772f4c107c4b81976a2464.jpg' },
  { id: 2, name: 'Collar Esmeralda', description: 'Description 2', price: 150.000, image: 'https://kevins.com.co/img/productos/1010003046.jpg' },
  { id: 3, name: 'Dije Esmeralda', description: 'Description 2', price: 600.000, image: 'https://glauser.vteximg.com.br/arquivos/ids/183755-1000-1000/DDAEDTD-701EA.png?v=638599400512070000' },
  { id: 4, name: 'Aretes plata mar', description: 'Description 2', price: 110.000, image: 'https://www.paolaramirezjoyeria.com/75-home_default/aretes-salome.jpg' },
  { id: 5, name: 'Aretes oro plata', description: 'Description 2', price: 90.000, image: 'https://kevins.com.co/img/productos/0210025020.jpg' },
  { id: 6, name: 'Esmeralda', description: 'Description 2', price: 800.000, image: 'https://glauser.vteximg.com.br/arquivos/ids/183737-1000-1000/DDAE156-701HA.png?v=638599400425770000' },
  { id: 7, name: 'Colibri plata', description: 'Description 2', price: 150.000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdZv4k_nc7CQ5rmq1NDuHg9TldWtgX3PbWw&s' },
  { id: 8, name: 'Colibri oro', description: 'Description 2', price: 200.000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5WJ2BiAA6bFBJKsKa4vHytLqdABRiQTrM7zEYQGySOO7izY0Cmk3Nb1kiP5_W7O0taQ&usqp=CAU' },

];

function Home({ addToCart }) {
  return (
    <div>
      <h2>Catalogo de Productos</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Home;

