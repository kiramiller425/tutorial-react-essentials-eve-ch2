import React from 'react'
import ReactDOM from 'react-dom'

const title = React.createElement(
    'h1',
    {id: 'title', className: 'header'},
    'Hello world'
)

ReactDOM.render(
    title,
    document.getElementById('root')
)