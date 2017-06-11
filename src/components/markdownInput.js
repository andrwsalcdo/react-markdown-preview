import React, { Component } from 'react'
import '../App.css'


class MarkdownInput extends Component {
    render () {
        return (
            <div>
                <textarea id="txt_input" placeholder="Type your markdown here..." value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}

export default MarkdownInput;