import React, { Component } from 'react'
import '../App.css'
let marked = require('marked');

class MarkdownPreview extends Component {

    render () {
        return (
            <div dangerouslySetInnerHTML={ {__html: marked(this.props.markup)} } />
        )
    }
}

export default MarkdownPreview; 