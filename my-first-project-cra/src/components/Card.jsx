import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carta = ({title, id, image, price, description}) => {
  return (
    <div className='cardContainer' id={id}>
      <Card id={id}>
          <Card.Img variant="top" src={image} className="card__img"/>
          <Card.Body className='card__head'>
              <Card.Title >{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Precio: ${price}</Card.Subtitle>
              <Card.Text className='card__description'>{description}</Card.Text>
          </Card.Body>
      </Card>
    </div>
  )
}

export default Carta