import React, { useEffect } from "react";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const data = useSelector((state) => state.user);
  // eslint-disable-next-line
  const currentDate = new Date();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.user && data.tokenExpiry) {
      if (currentDate < new Date(data.tokenExpiry)) {
        navigate("/");
      } else {
      }
    }
  }, [data, currentDate, navigate]);
  return (
    <div className="min-h-screen flex flex-col">
      <Popup />
      <Navbar />
      <div className="SignUp grow flex flex-row">
        <div
          style={{ backgroundImage: "url(./images/SignUp.jpg)" }}
          className="min-h-full grow bg-center bg-cover max-md:hidden"
        />
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
}
