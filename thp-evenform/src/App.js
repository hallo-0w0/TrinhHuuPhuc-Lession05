import React, { Component } from 'react'
import THP_Form1 from './components/THP_Form1'
import THP_Form2 from './components/THP_Form2'
import THP_Form3 from './components/THP_Form3'

export default class App extends Component {
  handleSubmit = (param)=>{
    console.log(param);

  }
  render() {
    return (
      <div>
        <h1>even form - controlled Component</h1>
        <div>
          <THP_Form1/>
          <THP_Form2/>
          <THP_Form3 onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}
