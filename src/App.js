import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import './bootstrap.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/cocktail/:id">
                    <SingleCocktail/>
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
