import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function Cards({ imgSrc, title, description, stock }) {

    const [cant, setCount] = useState(0);
    
    return (
        <div style={{}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button  variant="secondary" onClick={() => cant!=0 ? setCount(cant - 1) : setCount(0)}>-</Button>
                        <samp style={{ margin: '1rem' }} >{cant}</samp>
                        <Button variant="secondary" onClick={() => cant!=stock ? setCount(cant + 1) : setCount(stock)}>+</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards