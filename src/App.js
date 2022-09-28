
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import Cards from './components/Cards/Cards';
import Counter from './components/Counter/Counter';

function App() {

  const bienvenida = "Bienvenido a la mejor tienda de NFT's"

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={bienvenida}/>
    <Cards/>
    <Counter/>
    
    </>
  );

}

export default App;
