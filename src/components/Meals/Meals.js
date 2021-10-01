import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row, Button, Spinner, Container } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);

    const handleSearch = e => {
        const inputText = e.target.value;
        setSearchText(inputText);
    }

    return (
        <Container style={{ "marginTop": "80px" }}>
            <InputGroup className="mb-3 w-50 mx-auto">
                <FormControl
                    onChange={handleSearch}
                    placeholder="Type recipe name..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="success" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            {/* <h2>{meals.length}</h2> */}

            {meals?.length ? (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
                    }
                </Row>
            ) : (
                searchText.length ? (
                    <h3 className="mx-auto w-50 alert alert-danger text-center mt-5">No match found</h3>
                ) : (
                    <div className="d-flex justify-content-center align-items-center">
                        <Spinner animation="grow" />
                        <span> Loading...</span>
                    </div>
                )

            )
            }

        </Container>
    );
};

export default Meals;