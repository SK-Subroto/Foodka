import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Eye, EyeFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';

const Meal = (props) => {

    const { idMeal, strMeal, strCategory, strInstructions, strMealThumb } = props.meal;
    const history = useHistory();

    const handleDetailView = () => {
        history.push(`/meal/${idMeal}`)
    }

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={strMealThumb} style={{'height': '350px'}} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        <b>Category: </b>{strCategory }
                    </Card.Text>
                    <Card.Text>
                        { strInstructions.slice(0, 400) }
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button 
                        className="float-end" 
                        variant="success" 
                        onClick={handleDetailView}
                    ><EyeFill /> View Details</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Meal;