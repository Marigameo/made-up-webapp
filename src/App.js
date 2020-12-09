import './App.css';
import Route from './components/Route'
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home'
import DetailsPage from './pages/DetailsPage/DetailsPage';

function App () {
  return (
    <div className="App">
      <Navbar />
      {/* custom route component */}
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/profile'>
        <DetailsPage profileChecked={true} ordersChecked={false} />
      </Route>
      <Route path='/orders'>
        <DetailsPage profileChecked={false} ordersChecked={true} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
