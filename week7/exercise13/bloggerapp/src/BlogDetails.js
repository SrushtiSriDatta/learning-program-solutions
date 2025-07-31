import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: 'React Performance Tips', author: 'Alice' },
    { id: 2, title: 'State Management in React', author: 'Bob' },
    { id: 3, title: 'React Router Best Practices', author: 'Charlie' }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} - by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
