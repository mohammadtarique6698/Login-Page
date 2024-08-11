import React, { useState } from "react";
import BackGround from "../Images/background.png";
import Logo from "../Images/Amazon-Logo.png";
import Tree from "../Images/tree.png";
import ErrorSymbol from "../Images/error.png";
import Google from "../Images/google.png";
import Facebook from "../Images/facebook.png";
import Warning from "../Images/warning.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email) {
      setError(
        <div className="text-red-500 flex items-center">
          <img src={ErrorSymbol} alt="error" className="w-3 h-3 mr-1" />
          <p>The email is required</p>
        </div>
      );
    } else if (!validateEmail(email)) {
      setError(
        <div className="text-red-500 flex items-center">
          <img src={Warning} alt="error" className="w-3 h-3 mr-1" />
          <p>Invalid Email Format</p>
        </div>
      );
    } else if (!password) {
      setError(
        <div className="text-red-500 flex items-center">
          <img src={ErrorSymbol} alt="error" className="w-3 h-3 mr-1" />
          <p>The password is required</p>
        </div>
      );
    } else if (password.length < 6) {
      setError(
        <div className="text-red-500 flex items-center">
          <img src={Warning} alt="error" className="w-3 h-3 mr-1" />
          <p>The password must be at least 6 characters long.</p>
        </div>
      );
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="flex flex-col justify-center relative h-screen mb-20">
      <div className="grid grid-rows-12 grid-flow-row h-full">
        <div className="row-span-6">
          <img
            src={BackGround}
            alt="back-ground"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex justify-center items-center px-8 py-10 sm:py-16">
          <div className="bg-white rounded-lg w-full max-w-md min-h-[20%] sm:min-h-[10%] flex flex-col justify-between">
            <div className="h-14 w-full shadow-lg flex justify-center items-center bg-gray-100 rounded-t-lg">
              <img src={Logo} alt="logo" className="h-8" />
            </div>

            <div className="p-4 sm:p-6 sm:px-8 flex-grow">
              <h2 className="text-xl font-medium mb-4 text-center text-green-500">
                Login
              </h2>
              <div className="flex justify-center items-center mb-4">
                <img
                  src={Tree}
                  alt="tree"
                  className="w-40 h-20 sm:w-64 sm:h-24"
                />
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center"
              >
                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`p-2 placeholder-green-500 placeholder:font-bold mb-1 ${
                    error.includes("email") || error.includes("Invalid email")
                      ? "border-2 border-red-700 rounded w-full"
                      : "border-b rounded w-full"
                  }`}
                  required
                />
                {error && error.includes("email") && (
                  <div className="w-full flex flex-row items-start">
                    <img
                      src={ErrorSymbol}
                      alt="error"
                      className="w-3 h-3 mr-1"
                    />
                    <p className="text-red-500">{error}</p>
                  </div>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mb-3 p-2 border-b rounded w-full placeholder-green-500 placeholder:font-bold mt-1 ${
                    error.includes("password") ? "border-2 border-red-700" : ""
                  }`}
                  required
                />
                {error && error.includes("password") && (
                  <div className="w-full flex flex-row items-start">
                    <img
                      src={ErrorSymbol}
                      alt="error"
                      className="w-3 h-3 mr-1"
                    />
                    <p className="text-red-500">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 rounded-full w-full hover:bg-blue-600 my-2"
                >
                  Sign In
                </button>
              </form>

              <div className="flex flex-row justify-between items-center">
                <p className="text-sm cursor-pointer font-medium">
                  Forgot Password?
                </p>
                <p className="text-sm cursor-pointer font-medium text-red-500">
                  New User? Sign Up
                </p>
              </div>

              <div className="text-center my-3">
                <p className="text-sm font-medium">or</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <button className="flex items-center justify-around gap-2 w-full bg-blue-500 py-1">
                  <img src={Google} alt="google" className="h-10 w-10" />
                  <p className="text-sm font-medium">Continue with Google</p>
                  <p> </p>
                </button>
                <button className="flex items-center justify-around gap-2 w-full bg-blue-500 py-1">
                  <img src={Facebook} alt="facebook" className="h-10 w-10" />
                  <p className="text-sm font-medium">Continue with Facebook</p>
                  <p> </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
