import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
   state = {
      show: false
   }

   showInfo = () => {
      //return (event) => {
      this.setState({ show: !this.state.show })
      //}
   }

   render() {
      console.log(this.props)
      const { id, city, image, name, info } = this.props.tour
      const deleteTour = this.props.deleteTour

      const infoInsert = this.state.show === true ? <p>{info}</p> : <></>

      return (
         <section className="tour">
            <div className="image-container">
               <img src={image} alt="" />
            </div>
            <div className="info-container">
               <h2>{name}</h2>
               <h3>{city}</h3>
               <p>Info: {" "}
                  <span onClick={this.showInfo}><i className="fas fa-caret-square-down" /></span>
               </p>
               {infoInsert}
               {/* <p>{info}</p> */}
               <span className="close-button" onClick={deleteTour(id)}>
                  <i className="fas fa-window-close" />
               </span>
            </div>
         </section>
      )
   }
}