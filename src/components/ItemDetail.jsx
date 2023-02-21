import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


function ItemDetail({produnct}) {
    const [cant, setCount] = useState(1)
    return (
        <div style={{ width: '100%', margin: '0 0', display: 'flex' }}>
            <div style={{ width: '60%', margin: '20px' }}>
                <img width={'100%'} src="src/assets/logo.jpg" alt="" />
            </div>
            <div style={{ width: '40%', margin: '20px', display: 'block' }}>
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maxime accusamus laudantium nemo recusandae quae, esse provident ipsam, voluptatum sint inventore fugit? Alias, ipsam ullam.</p>
                <span>Stock: 5</span>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button variant="secondary" onClick={() => cant != 1 ? setCount(cant - 1) : setCount(0)}>-</Button>
                    <span>{cant}</span>
                    <Button variant="secondary" onClick={() => cant != 5 ? setCount(cant + 1) : setCount(5)}>+</Button>
                </div>

                <Button variant="secondary" >Agregar a carrito</Button>

            </div>
        </div>
    )
}

export default ItemDetail