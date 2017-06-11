import React, { Component } from 'react';
import './App.css';

//import future componnents here



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n'
    }
  }
  
  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }  
  
  render () {
    return (
      <div className="container">
        <div className="column" id="md-input">
            {/*<markownInput onChange={this.handleChange} textValue={this.state.text} />*/}
            {this.state.text}
        </div>
        <div className="column" id="md-preview">
              {/*<markdownPreview markup={this.state.text} /> */}
              hello world
        </div>
      </div>
    )
  }
}


export default App;
