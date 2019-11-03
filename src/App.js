import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.scss';

class App extends Component {
   render() {
      return ( 
         <React.Fragment>
            <Navbar />
         </React.Fragment>
      );
   }
}

export default App;