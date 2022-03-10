import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
