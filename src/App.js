import React from 'react';
import { Provider } from 'react-redux';
import {Route,Switch,HashRouter as Router } from 'react-router-dom'
import Footer from './Components/Layout/Footer'
import Landing from './Components/Home/Landing'
import MovieDetail from './Components/Home/MovieDetail'
import Navbar from './Components/Layout/Navbar'
import './App.css';
import {store} from'./store'

function App() {
  return (
    <Provider store={store}>
		  <Router>
		   <Navbar/>
			  <Switch>
			<Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={MovieDetail} />
			  </Switch>
	  		<Footer/>
		  </Router>
	 </Provider>
  );
}

export default App;
