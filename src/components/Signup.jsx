import React from 'react'
import { Signature, User2Icon, Mail,  Lock} from 'lucide-react';
import { Link } from 'react-router-dom';


import { ToastContainer , toast } from 'react-toastify';
export default function Signup() {
    const [name , setName] = React.useState("");
    const [email, setMail] = React.useState("");
    const [password, setPass] = React.useState(Number);
//   const [errors, setErrors] = React.useState<{ email: String, password: String }>({});


    function notify (){
        toast("Submission Submitted SucessFully" , "success")
    }

        async function pushNewUsers() {
            const connect = await fetch('https://quickproject-backend.onrender.com/Signup',{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    "username": `${name}`,
                    "usermail": `${email}`,
                    "userpassword": `${password}`
                })
            });
            const output = await connect.json();
                console.log(output)
        }

        const handleSubmit =(e)=>{
            e.preventDefault();
            notify()
            console.log("user details submited")
        }
    // React.useEffect(()=>{
    //     console.log("It is working");
    //     pushNewUsers()
    // })

  return (
    <>
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Logo and Header */}
                <div className="text-center">
                <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                    <Signature className="h-8 w-8 text-white" />
                    </div>
                </div>
                <p className="mt-2 text-gray-400">SignUp To Quick Project</p>
                </div>

                {/* Sign In Form */}
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <form onSubmit={()=>handleSubmit()} className="space-y-6">
                    {/* UserName Field */}
                    <div>
                    <label htmlFor="text" className="block text-sm font-medium text-gray-300 mb-2">
                        UserName
                    </label>
                    <div className="relative">
                        <User2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Enter Your Name"
                        />
                    </div>
                    {/* {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>} */}
                    </div>

                    {/* Email Field */}
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setMail(e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Enter your email"
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
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                            className={`w-full pl-10 pr-12 py-3 bg-white/10 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent `}
                            placeholder="Enter your password"
                        />

                    </div>
                    </div>

                    
                    {/* Submit Button */}
                    <button
                        type="button"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                        onClick={(e)=>{handleSubmit(e) , pushNewUsers()}}
                    >
                    Sign Up
                    </button>

                </form>


                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                    Already Have An Account?{' '}
                    <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                        Sign in here
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
