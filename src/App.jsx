import { useState, useEffect } from "react";
import { format } from "date-fns"; // Utility for formatting date/time
import "./App.css";

function App() {
  // State to store the current date and time
  // Initialized with the current system time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Create a timer that updates the time every second (1000ms)
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Update state with latest time
    }, 1000);

    // Cleanup function:
    // Clears the interval when the component unmounts
    // Prevents memory leaks and unnecessary background execution
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="app">
      <div className="clock">
        {/* Application title */}
        <h1>Productivity Dashboard</h1>

        {/* 
          Display formatted date and time
          Example format:
          Monday, May 3rd 2026, 14:30:45
        */}
        <p>
          {format(currentTime, "EEEE, MMMM do yyyy, HH:mm:ss")}
        </p>
      </div>
    </div>
  );
}

export default App;


