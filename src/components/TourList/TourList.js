import React, { Component } from 'react';
import Tour from '../Tour/Tour.js';
import { tours } from '../../tourData.js'
import './tourlist.scss';

export default class TourList extends Component {
   state = {
      theTours: tours
   }
   
   deleteTour = id => {
      const newTourList = this.state.theTours.filter(t => t.id !== id)
      this.setState({theTours: newTourList})
   }

   render() {

      const { theTours } = this.state
      console.log(theTours)
      const tourMap = theTours.map( t => 
         <Tour key={t.id} tour={t} deleteTour={this.deleteTour} />
      )

      return (
         <div>
            <h3>This is TourList</h3>
            {tourMap}
         </div>
      )
   }
}