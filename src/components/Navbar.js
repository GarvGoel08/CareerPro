import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line
  const currentDate = new Date();
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (data.user && data.tokenExpiry) {
      if (currentDate < new Date(data.tokenExpiry)) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }
  }, [data, currentDate]);

  const handleLogout = async () => {
    const data1 = await fetch(`${baseURL}auth/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (data1.ok) {
      dispatch({ type: "LOGOUT" });
      setIsAuthenticated(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-secondary-bg text-white relative font-sans text-base">
      <div className="flex justify-between items-center h-16">
        <a href="/" className="pl-8 text-lg pr-6 font-bold">
          CareerPro
        </a>
        <div className="hidden md:flex space-x-4">
          <a
            href="/"
            className="p-6 hover:text-hover-text transition ease-in-out duration-700"
          >
            Home
          </a>
          <a
            href="/career"
            className="p-6 hover:text-hover-text transition ease-in-out duration-700"
          >
            Career
          </a>
          <a
            href="/study"
            className="p-6 hover:text-hover-text transition ease-in-out duration-700"
          >
            Study
          </a>
          <a
            href="/tasks"
            className="p-6 hover:text-hover-text transition ease-in-out duration-700"
          >
            Calendar
          </a>
        </div>
        <div className="md:hidden flex items-center pr-8">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:inline-block relative text-left">
          <button
            onClick={toggleDropdown}
            className="flex items-center pr-8 focus:outline-none"
          >
            <img
              src="https://img.icons8.com/?size=100&id=7820&format=png&color=FFFFFF"
              alt="profile"
              loading="lazy"
              className="h-8 w-8 rounded-full"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-1 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="/signup"
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left  ${
                    isAuthenticated ? "hidden" : ""
                  }`}
                  role="menuitem"
                >
                  Create an account
                </a>
                <a
                  href="/login"
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left  ${
                    isAuthenticated ? "hidden" : ""
                  }`}
                  role="menuitem"
                >
                  Login
                </a>
                <button
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${
                    isAuthenticated ? "" : "hidden"
                  }`}
                  role="menuitem"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 pb-4">
          <a
            href="/"
            className="p-2 hover:text-hover-text transition ease-in-out duration-700"
          >
            Home
          </a>
          <a
            href="/career"
            className="p-2 hover:text-hover-text transition ease-in-out duration-700"
          >
            Career
          </a>
          <a
            href="/study"
            className="p-2 hover:text-hover-text transition ease-in-out duration-700"
          >
            Study
          </a>
          <a
            href="/tasks"
            className="p-2 hover:text-hover-text transition ease-in-out duration-700"
          >
            Calendar
          </a>
          <a
            href="/signup"
            className={`block p-2 hover:text-hover-text transition ease-in-out duration-700 ${
              isAuthenticated ? "hidden" : ""
            }`}
            role="menuitem"
          >
            Create an account
          </a>
          <a
            href="/login"
            className={`block p-2 hover:text-hover-text transition ease-in-out duration-700 ${
              isAuthenticated ? "hidden" : ""
            }`}
            role="menuitem"
          >
            Login
          </a>
          <button
            className={`block p-2 hover:text-hover-text transition ease-in-out duration-700 ${
              isAuthenticated ? "" : "hidden"
            }`}
            role="menuitem"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
