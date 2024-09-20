import Home from './Home/index';
import {Route, Switch } from 'react-router-dom';
import About from './About'
import Booking from './Booking'
import Contact from './Contact'
import Menu from './Menu'
import Service from './Service'
import Team from './Team'
import Testimonial from './Testimonial'
import Login from './Login';
import SignIn from './SignIn'


import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component={About} />
      <Route exact path='/Booking' component={Booking} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Menu' component={Menu} />
      <Route exact path='/Service' component={Service} />
      <Route exact path='/Team' component={Team} />
      <Route exact path='/Testimonial' component={Testimonial} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/SignIn' component={SignIn} />
    </Switch>
    
  );
}

export default App;
