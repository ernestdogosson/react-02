import { useState } from "react";
import Api from "./components/Api";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="py-8 bg-white text-center">
        <h1 className="text-4xl font-bold text-gray-700 tracking-widest mb-4">
          Do you know your flags?
        </h1>
        <span className="text-blue-500 ">Test your knowledge</span>
      </div>
      {!isAuthenticated && <Login onLoginSuccess={() => setIsAuthenticated(true)} />}
      {isAuthenticated && <Api />}
    </div>
  );
}

export default App;
