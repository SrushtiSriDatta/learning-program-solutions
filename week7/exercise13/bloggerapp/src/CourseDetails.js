import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: 'React Fundamentals', duration: '4 weeks' },
    { id: 2, name: 'React with Redux', duration: '6 weeks' },
    { id: 3, name: 'React Advanced Patterns', duration: '8 weeks' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - Duration: {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
