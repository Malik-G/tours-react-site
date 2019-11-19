import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
   
   render() {
      const { id, city, image, name, info } = this.props.tour
      const deleteTour = this.props.deleteTour
      console.log(this.props)
      return (
         <section className="tour">
            <div className="image-container">
               <img src={image} alt=""/>
            </div>
            <div className="info-container">
               <h2>{name}</h2>
               <h3>{city}</h3>
               <h5>Info {" "}
                  <span><i className="fas fa-caret-square-down"/></span>
               </h5>
               <p>{info}</p>
               <span className="close-button" onClick={deleteTour(id)}>
                  <i className="fas fa-window-close" />
               </span>
            </div>
         </section>
      )
   }
}