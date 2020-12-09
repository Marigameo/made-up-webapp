import './App.css';
import Route from './components/Route'
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home'
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Orders from './components/Orders/Orders';

function App () {
  return (
    <div className="App">
      <Navbar />
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/profile'>
        <DetailsPage />
      </Route>
      <Route path='/orders'>
        <DetailsPage />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
