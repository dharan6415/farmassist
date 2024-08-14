// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '@dotlottie/player-component';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     if(email === '' || password === ''){
//       setError("Please add all the fields")
//     }
//     setError('');
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
//       <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex">
//       <div className="w-1/2 p-4 flex items-center justify-center">
//           <dotlottie-player
//             src="https://lottie.host/0a8156d9-727d-4e90-a007-416af1b68688/wtaWKXIkAy.json"
//             autoplay
//             loop
//             style={{ width: '100%', height: '100%' }}
//           ></dotlottie-player>
//         </div>
//         <div className="w-1/2 p-4">
//           <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
//           {error && (
//             <div className="mb-4 text-red-500 text-sm text-center">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder='Email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 aria-label="Email"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder='Password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 aria-label="Password"
//               />
//             </div>
//             <div className='mb-3 text-right'>
//               <a href='' className='text-sm text-blue-500 hover:text-blue-700 no-underline'>Forgot Password?</a>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               >
//                 <Link to='/' className='no-underline text-white'>Login</Link>
//               </button>
//             </div>
//           </form>
//           <div className="mt-6 text-center">
//             <p className="text-sm">
//               Don't have an account?
//               <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">Create an Account</Link>
//             </p>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '@dotlottie/player-component';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (email === '' || password === '') {
//       setError('Please add all the fields');
//       return;
//     }
//     if(email === "admin@gmail.com"){
//       useNavigate("/")
//     }
//     setError('');
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 to-white">
//       <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex">
//         <div className="w-1/2 p-4 flex items-center justify-center">
//           <dotlottie-player
//             src="https://lottie.host/0a8156d9-727d-4e90-a007-416af1b68688/wtaWKXIkAy.json"
//             autoplay
//             loop
//             style={{ width: '100%', height: '100%' }}
//           ></dotlottie-player>
//         </div>
//         <div className="w-1/2 p-4">
//           <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
//           {error && (
//             <div className="mb-4 text-red-500 text-sm text-center">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 aria-label="Email"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 aria-label="Password"
//               />
//             </div>
//             <div className="mb-3 text-right">
//               <a href="#" className="text-sm text-blue-500 hover:text-blue-700 no-underline">
//                 Forgot Password?
//               </a>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               >
//                 <Link to="/" className="no-underline text-white">Login</Link>
//               </button>
//             </div>
//           </form>
//           <div className="mt-6 text-center">
//             <p className="text-sm">
//               Don't have an account?{' '}
//               <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">
//                 Create an Account
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from "../asserts/login111.jpeg";

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Please add all the fields');
      return;
    }

    setError('');
    onLogin(email); // Call the onLogin function from props
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 to-white">
      <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex">
        <div className="w-1/2 p-4 flex items-center justify-center">
         <img src={img} className='w-full h-full'/>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          {error && (
            <div className="mb-4 text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                aria-label="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                aria-label="Password"
              />
            </div>
            <div className="mb-3 text-right">
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700 no-underline">
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
