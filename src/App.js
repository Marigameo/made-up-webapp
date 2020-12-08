import './App.css';
import Route from './components/Route'
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home'
import Test from './components/Test'

function App () {
  return (
    <div className="App">
      <Navbar />
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/test'>
        <Test />
      </Route>
    </div>
  );
}

export default App;
