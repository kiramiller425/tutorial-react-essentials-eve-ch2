import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
    { "title": "Hunger", "author": "Roxane Gay", "pages": 320 },
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
]

// child component:
const Book = ({ title, author, pages }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>number of pages: {pages}</p>
        </section>
    )
}

// parent component:
const Library = ({ books }) => {
    return (
        <div>
            {books.map(
                (book, i) =>
                    <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages} />
            )}
        </div>
    )
}

render(
    <Library books={bookList} />,
    document.getElementById('root')
)
