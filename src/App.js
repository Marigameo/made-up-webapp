import './App.css';
import Route from './components/Route'
import Navbar from "./components/Navbar/Navbar"
import Home from './pages/Home/Home'

function App () {
  return (
    <div className="App">
      <Navbar />
      <Route path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
