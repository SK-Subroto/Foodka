import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Home.css'
import { init } from 'ityped'

const Home = () => {
    const history = useHistory()

    useEffect(() => {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['All continental food recipe one place 🍜🍔', 'Eat what ever, when ever 😋!'] })
    }, [])

    const handleViewMeals = () => {
        history.push('/meals');
    }
    return (
        <Container fluid className="home d-flex justify-content-center align-items-center">
            <div className="home-detail">
                <h2>Foodka</h2>
                <p id="myElement" className="fs-5"></p> 
                <Button onClick={handleViewMeals} variant="success">View All Meals</Button>
            </div>
        </Container>
    );
};

export default Home;