import React from "react";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OTPForm from "../components/OTPForm";

export default function OTP() {
  return (
    <div className="min-h-screen flex flex-col">
      <Popup />
      <Navbar />
      <div className="SignUp grow flex flex-row">
        <div
          style={{ backgroundImage: "url(./images/SignUp.jpg)" }}
          className="min-h-full grow bg-center bg-cover max-md:hidden"
        />
        <OTPForm/>
      </div>
      <Footer />
    </div>
  );
}