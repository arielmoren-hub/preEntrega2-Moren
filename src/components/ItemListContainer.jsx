import React from 'react'
import Cards from './Cards'

function ItemListContainer(greeting) {
    return (
        <div
            className='ItemListContainer-container'
            style={{ padding: '0.7rem' }}
        >
            <Cards
                imgSrc="src\assets\logo.jpg"
                title='Card Title'
                description='Some quick example text to build on the card title and make up the
                bulk of the card content'
                stock={5}
            />
            
        </div>
    )
}

export default ItemListContainer