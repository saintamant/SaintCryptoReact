import React, { useEffect, useState } from 'react'
import { products } from '../../assets/products';
import { customFetch } from '../../utils/CustomFetch';
import ItemList from '../ItemList/Itemlist'

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        customFetch(products)
            .then(res => setListProducts(res))
    }, [])

    

    return (
        <>
        <div>{greeting}</div>
        <ItemList listProducts={listProducts}/>
        </>
    )
}
export default ItemListContainer;