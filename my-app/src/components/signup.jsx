import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../asserts/login111.jpeg"
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[error, setError] =  useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === '' || password === ''){
      setError("Please add all the fields")
    }
    setError('');

    console.log(username);
    console.log(email);
    console.log(password);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-t from-blue-200 to-white">
      <div className="m-3 max-w-6xl w-full bg-white shadow-md rounded-lg p-8 flex">
       
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6">SignUp</h2>
          {error && (
            <div className="mb-4 text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="confirm_paswword">Confirm Password</label>
            <input 
            type="password"
            id="confirm_password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-3">
              <Link to="/login" className="no-underline">
                Already have account?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
              <Link to='/' className='no-underline text-white'>SignUp</Link>
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-4 flex items-center justify-center">
        <img src={img} className="w-full h-hull"/>
      </div>
      </div>
    </div>
  );
}

export default SignUp;
