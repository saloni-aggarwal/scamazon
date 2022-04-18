import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import './App.css';

//import CreateBook from './components/CreateBook';
//import ShowProduct from './components/ShowProduct';
import ShowAllProductFunctional from './components/ShowAllProductFunctional';
import ShowProductFunctional from './components/ShowProductFunctional';
import Thanku from './components/Thanku';
//import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<ShowAllProductFunctional />} />
          <Route path='/show/:id' element={<ShowProductFunctional />} />
          <Route exact path='/thanku' element={<Thanku />} />
          {/* <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;