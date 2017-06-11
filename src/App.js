import React, { Component } from 'react';
import './App.css';
//import future componnents here
import MarkdownInput from './components/MarkdownInput';
import MarkdownPreview from './components/MarkdownPreview';



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
            <MarkdownInput onChange={this.handleChange} value={this.state.text} />
        </div>
        <div className="column" id="md-preview">
            <MarkdownPreview markup={this.state.text} /> 
        </div>
      </div>
    )
  }
}


export default App;
