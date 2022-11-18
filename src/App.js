import './App.css';
import NavbarPortion from './Component/NavbarPortion/NavbarPortion';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Error404 from './Component/Error404/Error404';
import {
  BrowserRouter as Router,
  // Link,
  Route,
  Switch
} from "react-router-dom";
import Footer from './Component/Footer/Footer';
import Dashboard from './Component/Dashboard/Dashboard';
import Services from './Component/Services/Services';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div>
      <Router>
        <div className='sticky-top shadow '><NavbarPortion /></div>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/service/:courseId'>
            <ServiceDetails />
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <Error404></Error404>
          </Route>
        </Switch>
      </Router>
      <div className='bg-light mt-5'><Footer></Footer></div>
    </div>
  );
}

export default App;
