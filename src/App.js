import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
