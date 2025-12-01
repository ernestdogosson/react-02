import { useState } from "react";

function SignIn({ onSignInSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both fields");
      return;
    }
    
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (username === storedUser.username && password === storedUser.password) {
      setError("");
      onSignInSuccess();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="text-red-500 text-sm my-2">{error}</div>}
      <input
        type="text"
        placeholder="Username"
        className={`block mb-8 outline-1 p-3 w-full rounded focus:outline-2 ${
            error && !username ? 'outline-red-500 focus:outline-red-500' : 'outline-gray-300 focus:outline-blue-500'
          }`}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }}
      />
      <input
        type="password"
        placeholder="Password"
        className={`block mb-8 outline-1 p-3 w-full rounded focus:outline-2 ${
            error && !password ? 'outline-red-500 focus:outline-red-500' : 'outline-gray-300 focus:outline-blue-500'
          }`}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors">
        Sign In
      </button>
    </form>
  );
}

export default SignIn;
