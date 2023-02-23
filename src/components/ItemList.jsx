import React from 'react'
import Item from './Item'

function ItemList({products}) {
    
  return (
    <div  style={{ padding: '0.7rem' , display: 'flex' }}>
        {
            products.map(product => (
                <Item
                  item={product}
                />
            ))
        }
    
    </div>
  )
}

export default ItemList