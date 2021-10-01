import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Spinner } from 'react-bootstrap';
import { ArrowBarLeft } from 'react-bootstrap-icons';

const MealDetails = () => {
    const { mealId } = useParams()
    const [meal, setMeal] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, []);

    const seeMealHandler = () => {
        history.push('/meals');
    }

    return (
        <div className="container text-center" style={{ "marginTop": "80px" }}>
            {Object.keys(meal).length ? (
                <div>
                    <img className="img-fluid" style={{ "height": "250px" }} src={meal.strMealThumb} alt="" />
                    <h3>Meal Name: {meal.strMeal}</h3>
                    <p>{meal.strInstructions}</p>
                    <Button variant="success" onClick={seeMealHandler}><ArrowBarLeft size={30} /> See All meals</Button>
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" />
                    <span> Loading...</span>
                </div>
            )
            }
        </div>
    );
};

export default MealDetails;