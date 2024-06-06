import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function OTPForm() {
  const location = useLocation();
  const { email } = location.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!email) {
    navigate('/signup');
  }
  const baseURL = process.env.REACT_APP_BASE_URL;
  // Send a POST request to the server to register the user
  const [otp, setOTP] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await fetch(`${baseURL}auth/verifyOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp,email }),
      credentials: 'include',
    });
    if (user.ok) {
      // Store user data in the redux store
      const data = await user.json();
      dispatch({ type: 'SET_USER', payload: { user: data.user, tokenExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() } });
    } else {
      alert("User registration failed");
    }
  };
  return (
    <div className="SignUpForm flex flex-col px-12 py-6 mx-6 justify-center max-sm:px-2 max-md:grow min-w-[50%]">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
        OTP Verification
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-6 gap-4 fade-in"
      >
        <input
          type="number"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          className="p-2 border border-gray-300 border-0 outline-none border-b-2  rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
        />
        <button className="bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
          Verify OTP
        </button>
      </form>
    </div>
  );
}
