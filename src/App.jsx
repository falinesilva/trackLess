import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-between m-4 text-blue-600">
        <div className="font-bold text-lg">trackLess</div>
        <button type="button" className="bg-blue-600 text-gray-50">
          Menu
        </button>
      </div>
      <div className="flex justify-center gap-4 bg-gray-300 align-middle">
        <div>Past Due: $100</div>
        <div>Upcoming: $100</div>
      </div>
      <div className="bg-gray-400">
        Name: Credit Card Type: Debt Amount: R$1.200 Due Date: 24/06/2025
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-gray-50"
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-gray-50"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default App;
