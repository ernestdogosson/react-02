import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <div className="absolute inset-0 bg-gray-950/90  z-10 flex justify-center items-center ">
        <div className="bg-white opacity-100 p-8 w-96 rounded">
          {isSignUp ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">
                Create Account
              </h2>
              <SignUp onSignUpSuccess={() => setIsSignUp(false)} />
              <p className="text-center mt-4 text-sm text-gray-600">
                Already have an account? 
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-blue-500 underline ml-1 hover:text-blue-600"
                >
                  Sign in here
                </button>
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">
                Welcome Back
              </h2>
              <SignIn onSignInSuccess={onLoginSuccess} />
              <p className="text-center mt-4 text-sm text-gray-600">
                New to this app? 
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-blue-500 underline ml-1 hover:text-blue-600"
                >
                  Create an account
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
