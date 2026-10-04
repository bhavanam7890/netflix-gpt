import { useState } from "react";
import Header from "./Header";

    const Login = ()=> {
        const [isSignInForm, setIsSignInForm] = useState(true); 
        
        const toggleSignInForm = ()=> {
            setIsSignInForm(!isSignInForm);
        };
    
    
        return (
    <div className="relative min-h-screen w-full">
        <Header />
        <div className="absolute inset-0 -z-10">                                                               
        <img className="h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo" />
        </div>
                <div className="flex justify-center items-center min-h-[80vh]">

        <form className="w-full max-w-md p-12 bg-black/80 rounded-md text-white flex flex-col gap-4">
        <h1 className="font-bold text-3xl"> 
            { isSignInForm ? "Sign In" : "Sign Up" } 
         </h1>

         { !isSignInForm && ( 
            <input type="text" placeholder="Full Name" className="p-4 m-4 bg-gray-700 rounded w-full"/>
        )}

            <input type="text" placeholder="Email Address" className="p-4 m-4 bg-gray-700 rounded w-full "/>
           
            <input type="password" placeholder="Password" className="p-4 m-4 bg-gray-700 rounded w-full"/>

            <button className="p-4 m-6 bg-red-700 w-full rounded-lg"> 
                { isSignInForm ? "Sign In" : "Sign Up" }
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                { isSignInForm ? "New To Netflix? Sign Up Now" : "Already registered? Sign In Now. "} 
              </p>
        </form>
        </div>
        </div>
    );
};

export default Login;