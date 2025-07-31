import './App.css';

function App() {
  // Featured office object
  const office = {
    name: "Sunshine Corporate Office",
    rent: 55000,
    address: "123 Main Street, Mumbai"
  };

  // List of multiple offices
  const officeSpaces = [
    { name: "Tech Park A", rent: 45000, address: "Bangalore" },
    { name: "Global Tower", rent: 75000, address: "Hyderabad" },
    { name: "Innovation Hub", rent: 60000, address: "Pune" },
    { name: "Corporate Plaza", rent: 58000, address: "Delhi" },
    { name: "Green Valley Offices", rent: 90000, address: "Chennai" }
  ];

  // Inline style for rent color
  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? "red" : "green",
      fontWeight: "bold"
    };
  };

  return (
    <div className="container">
      {/* Page heading */}
      <h1>Office Space Rental App</h1>

      {/* Office Image */}
      <img
        src="https://via.placeholder.com/400x200?text=Office+Space"
        alt="Office Space"
      />

      {/* Featured Office Section */}
      <h2>Featured Office</h2>
      <div className="featured-card">
        <p><strong>Name:</strong> {office.name}</p>
        <p><strong>Address:</strong> {office.address}</p>
        <p style={getRentStyle(office.rent)}>
          <strong>Rent:</strong> ₹{office.rent}
        </p>
      </div>

      {/* List of Available Offices */}
      <h2>Available Office Spaces</h2>
      <ul>
        {officeSpaces.map((item, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Address:</strong> {item.address}</p>
            <p style={getRentStyle(item.rent)}>
              <strong>Rent:</strong> ₹{item.rent}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
