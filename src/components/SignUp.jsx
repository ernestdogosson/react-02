import { useState } from "react";

function SignUp({ onSignUpSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const addStorage = () => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    setIsSuccess(true);
    setError("");
    setTimeout(() => {
      onSignUpSuccess();
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both fields");
      return;
    }
    addStorage();
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSuccess ? (
        <div className="text-green-500 text-sm my-2 text-center">
          ✓ Account created successfully! Redirecting to sign in...
        </div>
      ) : (
        error && <div className="text-red-500 text-sm my-2">{error}</div>
      )}
      <input
        type="text"
        placeholder="Username"
        className={`block mb-8 outline-1 p-3 w-full rounded focus:outline-2 ${
          error && !username
            ? "outline-red-500 focus:outline-red-500"
            : "outline-gray-300 focus:outline-blue-500"
        }`}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }}
        disabled={isSuccess}
      />
      <input
        type="password"
        placeholder="Password"
        className={`block mb-8 outline-1 p-3 w-full rounded focus:outline-2 ${
          error && !password
            ? "outline-red-500 focus:outline-red-500"
            : "outline-gray-300 focus:outline-blue-500"
        }`}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
        disabled={isSuccess}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-4 w-full rounded hover:bg-blue-600 transition disabled:bg-gray-400"
        disabled={isSuccess}
      >
        {isSuccess ? "Creating Account..." : "Register"}
      </button>
    </form>
  );
}

export default SignUp;
