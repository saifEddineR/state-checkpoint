import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  state = {
    hidden : false,
    fullName: 'Elon Musk',
    bio: 'South African entrepreneur Elon Musk is known for founding Tesla Motors and SpaceX, which launched a landmark commercial spacecraft in 2012.',
    imgSrc:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
    profession: 'CEO of Tesla Motors, SpaceX ..',
    counter:0
  };
  toggleBtn = () => {
    this.setState({hidden : !this.state.hidden});
  }
  componentDidMount() {
    setInterval((el) => {
      el = this.state.counter + 1;
      this.state.counter = el;
      this.render()
      console.log(el) //it's counting in the console but not updating! cause there is no re-render
    }, 1000)
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <button onClick={this.toggleBtn} >Click Here!</button>
        <p className="counter" >counter : {this.state.counter} </p>
        <article>{ this.state.hidden ? 
        <div><h3>{this.state.fullName}</h3>
        <p>{this.state.bio}</p> 
        <img src ={this.state.imgSrc}/> 
        <p>{this.state.profession} </p></div> :
        <p>click the button to show content</p> }</article>
          
      </header>
    </div>
    )
  }

  
}


