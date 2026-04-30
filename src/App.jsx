import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="app">
      <div className="clock">
        <h1>Productivity Dashboard</h1>

        {/* Date + Time */}
        <p>
          {format(currentTime, "EEEE, MMMM do yyyy, HH:mm:ss")}
        </p>
      </div>
    </div>
  );
}

export default App;


