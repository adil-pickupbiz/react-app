import React, { useState } from "react";

const RegisterUse = () => {
  const [create, setCreate] = useState({
    uname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreate({ ...create, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:8080/api/regiser"; // API URL

    try {
      // Call the API
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(create), // Convert the input to JSON
      });

      if (!response.ok) {
        // Handle server errors
        throw new Error("Failed to register user");
      }

      const data = await response.json(); // Parse JSON response
      setMessage(data.message || "User registered successfully!"); // Display success message
      console.log("Response Data:", data); // Log response for debugging
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      setMessage("Error: Unable to register user");
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="uname"
            value={create.uname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={create.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={create.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterUse;
