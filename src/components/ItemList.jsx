import React from 'react'
import Items from './Items'

function ItemList({products}) {
    
  return (
    <div  style={{ padding: '0.7rem' , display: 'flex' }}>
        {
            products.map(product => (
                <Items
                  item={product}
                />
            ))
        }
    
    </div>
  )
}

export default ItemList