import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
   super()
   this.state = {
     text: "",
     photoAdded: false
   }
 }
 handleChange(event) {
   this.setState({ text: event.target.value });
 }
 togglePhoto(event) {
   this.setState({ photoAdded: !this.state.photoAdded });
 }
 overflowAlert() {
   if (this.remainingCharacters() < 0) {
     if (this.state.photoAdded) {
       var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
       var overflowText = this.state.text.substring(140 - 23);
     } else {
       var beforeOverflowText = this.state.text.substring(140 - 10, 140);
       var overflowText = this.state.text.substring(140);
     }

     return (
       <div className="alert alert-warning">
         <strong>Oops! Too Long:</strong>
         &nbsp;...{beforeOverflowText}
         <strong className="bg-danger">{overflowText}</strong>
       </div>
     );
   } else {
     return "";
   }
 }
 remainingCharacters() {
   if (this.state.photoAdded) {
     return 140 - 23 - this.state.text.length;
   } else {
     return 140 - this.state.text.length;
   }
 }
 render() {
   return (
     <div className="well clearfix">
       { this.overflowAlert() }
       <textarea className="form-control"
                 onChange={this.handleChange.bind(this)}></textarea>
       <br/>
       <span>{ this.remainingCharacters() }</span>
       <button className="btn btn-primary pull-right"
         disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
       <button className="btn btn-default pull-right"
         onClick={this.togglePhoto.bind(this)}>
         {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
       </button>
     </div>
   );
 }
}

export default App;
