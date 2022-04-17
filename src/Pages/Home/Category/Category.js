import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Category = (props) => {
    const { category, img, price, } = props.cat;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height={426} className='img-fluid' />
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <button className="btn btn-primary">Book {category}</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Category;