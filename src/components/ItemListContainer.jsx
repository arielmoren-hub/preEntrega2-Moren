import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import data from '/data.json'

function ItemListContainer(greeting) {
    const { category } = useParams();
   


    const filter = data.filter((product) => product.category === category)
    return (
        <div style={{ padding: '0.7rem'}}>
            {
             category ? <ItemList products={filter}/> :  <ItemList products={data}/>
            }
        </div>
    )
}

export default ItemListContainer