import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: 'React Basics', author: 'John Doe' },
    { id: 2, title: 'Advanced React', author: 'Jane Smith' },
    { id: 3, title: 'React Hooks in Depth', author: 'Robert Brown' }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
