import React from 'react'
import { LogIn, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
export default function Login() {
    const [name, setName] = React.useState("");
    const [password, setPass] = React.useState(Number);

    const lower_name = name.toLowerCase()


// -- GOT THE POP UP NOTIFICATION FOR A GITHUB REPO WILL SHEAR IT ON THE README.md File
    const successfulnotify = () => toast("Login SuccessFull");
    const notfoundnotify = () => toast("User Not Found");

        async function checkUsers() {
           const connect = await fetch(`http://127.0.0.1:8000/Login?Username=${lower_name}&Password=${password}`);
           const output = await connect.json();
            console.log(output)
            if (output == "success"){

              // This is for the notification for the successfull 
               successfulnotify();

            }

            else if ( output == "User Not Found"){

              // This is for the error notification for any type errors
              notfoundnotify();

            }

        }

        const handleSubmit =(e)=>{
            e.preventDefault();
            console.log("user details submited")
        }



  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
              <LogIn className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">Welcome back</h2>
          <p className="mt-2 text-gray-400">Sign in To Quick Project</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
          <form onSubmit={()=>handleSubmit()} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                User Name
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="text"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your UserName"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                //   type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                  className={`w-full pl-10 pr-12 py-3 bg-white/10 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent `}
                  placeholder="Enter your password"
                />
              </div>
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              onClick={(e)=>{handleSubmit(e) , checkUsers()}}
            >
                Login
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="text-center">
          <Link to="/" className="text-gray-400 hover:text-white text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>


    {/* THIS IS FOR THE TOAST PART */}
      <ToastContainer />
    </>
  )
}
