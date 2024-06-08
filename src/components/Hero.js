import React from "react";

export default function Hero() {
  return (
    <div
      className="color-white text-center p-2 text-sm font-bold text-black h-100 bg-cover bg-no-repeat bg-center flex items-center justify-center flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(./images/Hero.jpg)",
        height: "calc(100vh - 4rem - 2.3rem)",
      }}
    >
      <img
        src="./images/HeroIcon.jpeg"
        alt="CareerPro Logo"
        className="w-40 h-40 mx-auto max-md:w-28 max-md:h-28"
      />
        <h1 className="text-5xl my-3 max-w-[900px] font-bold mt-4 max-md:text-3xl">Enhance Your career and achieve success with CareerPro</h1>
        {/* Get Started Button */}
        <button className="max-md:text-xs bg-tertiary-bg text-white px-8 py-2 my-2 rounded-full mt-4 hover:bg-hover-text transition ease-in-out duration-700">
            Get Started
        </button>
    </div>
  );
}
