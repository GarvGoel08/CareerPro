import React from 'react'
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div>  
      <Popup />
      <Navbar />
      <Hero />
      <div className="Features px-4 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 my-8">
          Our Features
        </h2>
        <div className="flex flex-wrappy-8 my-8 gap-3 justify-center items-center box-border">
          <FeatureCard
            title="Career Planner"
            points={[
              "Plan your career using our top-class career planner.",
              "Get to know all the steps you need to follow to reach the pinnacle of your career.",
              "From setting goals to tracking your progress.",
              "Provides comprehensive guidance and resources to help you achieve your professional aspirations.",
              "Supports your journey to success whether you're just starting out or looking to advance.",
            ]}
          />
          <FeatureCard
            title="Study Planner"
            points={[
              "Organize your study schedule efficiently with our advanced study planner.",
              "Create a personalized study plan tailored to your needs and goals.",
              "Track your study hours and set reminders for important deadlines.",
              "Break down your syllabus into manageable tasks.",
              "Stay focused, reduce stress, and ensure you cover all necessary material before exams.",
            ]}
          />
          <FeatureCard
            title="Task Manager"
            points={[
              "Manage all your tasks effortlessly with our intuitive task manager.",
              "Create, prioritize, and track your tasks to ensure nothing falls through the cracks.",
              "Whether it's assignments, projects, or personal to-dos.",
              "Helps you stay organized and productive.",
              "Integrate your study plans seamlessly and keep your academic life on track.",
            ]}
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
