import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [view, setView] = useState('book'); // default to books

  // Method 1: Using if-else (Element Variable)
  let content;
  if (view === 'book') {
    content = <BookDetails />;
  } else if (view === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div className="container">
      <h1>Blogger App</h1>

      {/* Buttons to change view */}
      <div className="button-group">
        <button onClick={() => setView('book')}>Show Books</button>
        <button onClick={() => setView('blog')}>Show Blogs</button>
        <button onClick={() => setView('course')}>Show Courses</button>
      </div>

      {/* Method 1: Element Variable */}
      {content}

      <hr />

      {/* Method 2: Ternary Operator */}
      {view === 'book'
        ? <BookDetails />
        : view === 'blog'
          ? <BlogDetails />
          : <CourseDetails />}

      <hr />

      {/* Method 3: Logical AND */}
      {view === 'course' && <CourseDetails />}
    </div>
  );
}

export default App;
