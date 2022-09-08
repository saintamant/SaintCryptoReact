
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';

function App() {

  const bienvenida = "Bienvenido a la mejor tienda de NFT's"

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={bienvenida}/>
    </>
  );

}

export default App;
