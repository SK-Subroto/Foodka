import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './components/Meals/Meals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>

        <Header/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/meals">
            <Meals />
          </Route>
          <Route path="/meal/:mealId">
            <MealDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
