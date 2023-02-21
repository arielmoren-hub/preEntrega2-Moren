import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Items({item}) {

    const [cant, setCount] = useState(0);

    return (
        <div style={{ margin: '0.5rem' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.urlPhoto} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Link to='/detail'>
                        <Button variant="secondary">Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Items