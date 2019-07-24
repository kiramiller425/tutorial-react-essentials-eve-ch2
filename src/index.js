import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

// JSX tags included:
ReactDOM.render(
    <div style={style}>
        <h1 id="heading-element">Hello World</h1>
        <p>We are glad you are here</p>
    </div>,
    document.getElementById('root')
)