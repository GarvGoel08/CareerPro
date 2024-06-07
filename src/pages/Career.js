import React, { useState } from "react";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Career() {
  const [classs, setClass] = useState("");
  const [career, setCareer] = useState("");
  const [college, setCollege] = useState("");
  const [lastData, setLastData] = useState({
    career: "",
    classs: "",
    college: "",
  });
  const [careerPlan, setCareerPlan] = useState([]);
  const [savedPlans, setSavedPlans] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const data = useSelector((state) => state.user);
  // eslint-disable-next-line
  const currentDate = new Date();
  const baseURL = process.env.REACT_APP_BASE_URL;

  // If user is authenticated, getCareerPlan from backend
  useEffect(() => {
    if (isAuthenticated) {
      const getCareerPlan = async () => {
        try {
          const res = await fetch(`${baseURL}career/getCareerPlan`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          const data = await res.json();
          setSavedPlans(data);
        } catch (error) {
          console.error(error);
        }
      };
      getCareerPlan();
    }
  }, [isAuthenticated, baseURL]);

  useEffect(() => {
    if (data.user && data.tokenExpiry) {
      if (currentDate < new Date(data.tokenExpiry)) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }
  }, [data, currentDate]);
  // POST: {{baseURL}}api/v1/career/getCareerPlan
  // Body: { career, classs, college }
  // Response: { steps: [{ title, description }] }
  const handleSave = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${baseURL}career/saveCareerPlan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...lastData, steps: careerPlan }),
      });
      const data = await res.json();
      if (data.success) {
        // Add this saved plan to savedPlans
        setLoading(false);
        setSavedPlans([...savedPlans, data.careerPlan]);
        alert("Career Plan saved successfully");
        setLastData({ career: "", classs: "", college: "" });
      } else {
        alert("Error saving Career Plan");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Error saving Career Plan");
    }
  };
  const handleSubmit = async (e) => {
    if (!career || !classs) {
      alert("Please provide career and class");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${baseURL}career/getCareerPlan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ career, classs, college }),
      });
      const data = await res.json();
      setLastData({ career, classs, college });
      setCareerPlan(data.steps);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Error generating career plan");
    }
  };
  // setCareerPlan to selected saved plan when clicked
  const handleSavedPlan = (plan) => {
    setLastData({ career: "", classs: "", college: "" });
    setCareerPlan(plan.steps);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Popup />
      <Navbar />
      <div className="Career grow p-6 flex flex-col">
        <h2 className="text-3xl font-bold text-center text-gray-800 my-2 mb-6">
          Career Planner
        </h2>
        {/* Div to enter details: Career Path, Current Class and Desired College */}
        <div className="bg-[#f2e2cd] py-4 px-8 mb-6 rounded-lg shadow-md">
          <div className="flex flex-row flex-wrap gap-4">
            <div className="flex grow flex-col gap-2">
              <label htmlFor="career" className="text-sm font-semibold">
                Career Path
              </label>
              <input
                type="text"
                id="career"
                name="career"
                placeholder="e.g. Engineering, Medical, etc."
                className="p-2 rounded-md border text-xs border-gray-300"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
              />
            </div>
            <div className="flex grow flex-col gap-2">
              <label htmlFor="class" className="text-sm font-semibold">
                Current Class
              </label>
              <input
                type="text"
                id="class"
                name="class"
                placeholder="e.g. 10th, 12th, Graduate, etc."
                className="p-2 rounded-md border text-xs border-gray-300"
                value={classs}
                onChange={(e) => setClass(e.target.value)}
              />
            </div>
            <div className="flex grow flex-col gap-2">
              <label htmlFor="college" className="text-sm font-semibold">
                Desired College
              </label>
              <input
                type="text"
                id="college"
                placeholder="e.g. IIT, NIT, etc. (Optional)"
                name="college"
                className="p-2 rounded-md border text-xs border-gray-300"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#f9a826] text-white text-sm font-semibold py-2 px-4 rounded-lg mt-4"
            disabled={loading}
          >
            {loading ? "Loading..." : "Generate Career Plan"}
          </button>
        </div>
        {/* Horizontal flex to show saved Careers */}

        {savedPlans && savedPlans.length > 0 && savedPlans[0].career && (
          <h1 className="text-xl font-semibold text-gray-800 mb-3">
            Saved Plans
          </h1>
        )}
        <div className="flex flex-row gap-4 mb-6 overflow-x-auto">
          {savedPlans &&
            savedPlans.length > 0 && savedPlans[0].career &&
            savedPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#f2e2cd] p-4 rounded-lg shadow-md"
                onClick={() => handleSavedPlan(plan)}
              >
                <h3 className="text-base font-semibold text-gray-800 w-64">
                  {plan.career}
                </h3>
                <p className="text-xs text-gray-600">
                  Class: {plan.classs}{" "}
                  {plan.college && `| College: ${plan.college}`}
                </p>
              </div>
            ))}
        </div>
        {/* Flex to show career steps */}
        <div className="flex flex-col gap-6 mb-6 mt-6">
        {careerPlan &&
            careerPlan.length > 0 && (
              <h1 className="text-xl font-semibold text-gray-800">
                Generated Career Plan:
              </h1>
            )}
          {careerPlan &&
            careerPlan.length > 0 &&
            careerPlan.map((step, index) => (
              <div
                key={index}
                className="bg-[#f2e2cd] p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-base text-gray-600">{step.description}</p>
              </div>
            ))}
        </div>
        {careerPlan && careerPlan.length > 0 && (
          // Disable button if lastData is empty or if user not authenticated
          <button
            onClick={handleSave}
            className="bg-[#f9a826] text-white text-lg font-semibold py-2 px-6 rounded-lg mt-4 self-center"
            disabled={!lastData.career || !isAuthenticated || loading}
          >
            {loading ? "Saving..." : "Save Steps"}
          </button>
        )}
        {careerPlan && careerPlan.length > 0 &&(!lastData.career || !isAuthenticated) && (
          <p className="text-sm mt-3 text-red-600 text-center">
            Save Button works only if you are authenticated and Career Path is
            not already saved
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
