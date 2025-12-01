import { useState } from "react";
import SignUp from "./SignUp";

function Login() {
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <div className="absolute inset-0 bg-gray-950/90  z-10 flex justify-center items-center ">
        <div className="bg-white opacity-100 p-8 w-96 rounded">
          {signUp ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">
                Sign Up
              </h2>
              <SignUp />
              <p className="text-center mt-4">
                Already have an account?
                <button
                  onClick={() => setSignUp(false)}
                  className="text-blue-500 underline ml-1"
                >
                  Sign in
                </button>
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">
                Sign In
              </h2>

              <p className="text-center mt-4">
                Don't have an account?
                <button
                  onClick={() => setSignUp(true)}
                  className="text-blue-500 underline ml-1"
                >
                  Sign up
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
