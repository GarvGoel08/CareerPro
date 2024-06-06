import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
    
  const baseURL = process.env.REACT_APP_BASE_URL;
  // Send a POST request to the server to register the user
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get the form data
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const user = await fetch(`${baseURL}auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (user.ok) {
        navigate('/verifyotp', { state: { email } });
    } else {
      console.log(user);
      alert("User registration failed");
    }
  };
  return (
    <div className="SignUpForm flex flex-col px-12 py-6 mx-6 justify-center max-sm:px-2 max-md:grow min-w-[50%]">
    <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
      Sign Up
    </h2>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-6 gap-4 fade-in"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 border-0 outline-none border-b-2 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border border-gray-300 border-0 outline-none border-b-2  rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300 border-0 outline-none border-b-2  rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="p-2 border border-gray-300 border-0 outline-none border-b-2  rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
      />
      <button className="bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
        Sign Up
      </button>
      <a href="/login" className="text-center text-blue-500 hover:underline"> Already have an account? Login</a>
    </form>
  </div>
  )
}
