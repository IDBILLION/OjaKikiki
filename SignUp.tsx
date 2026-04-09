import { useState } from "react";

function SignUp() 
{
    const initialValue = ({name: "", email: "", password: "", confirmPassword: "",});
   const [formData, setFormData] = useState(initialValue);
  /* const [errors, setErrors] = useState({});*/
   /*const [success, setSuccess] = useState(false);*/

  
const handleChange = (e) => {
const {name, value} = e.target;
    setFormData((prevUser) => (
        {...prevUser, [name]: value}
    ));
  };

 return(
        <>
        <div className="bg-blue-200  mt-10 md:w-1/3 mx-auto grid grid-cols-1 rounded-xl text-indigo-600 p-5 text-center">
        <h2 className="font-medium text-3xl my-4"> 
        Create your Account 
        </h2>

        <p className="mb-6 font-medium"> 
        Join us today and get started 
         </p> 
        <form className="justify-center ml-7">
            <label className="font-semibold">
                Full Name:
                <div>
            <input 
            type="text"
            placeholder="Aderemi Idris"
             className="bg-[#fff] w-1/2 p-1 font-semibold ring-2 ring-gray-500 text-center m-2 rounded focus:ring-2 focus:ring-[#1e90ff] focus:border-[#1e90ff] focus:outline-none"  
             name="name"
             value={formData.name}
             onChange={handleChange} 
             />
             </div>
             </label>

            <label className="font-semibold">
                Email Address:
                <div>
            <input 
            type="email" 
            placeholder="you@example.com"
             className="mt-2 mb-2 py-2 px-4 ring-3 ring-gray-200 rounded text-center" 
             name="email"
             value={formData.email}
             onChange={handleChange} 
             />
             </div>
             </label>

            <label className="font-semibold">
                Password:
                <div>
            <input
             type="password" 
             placeholder="*****"
              className="mt-2 mb-2 py-2 px-4 ring-3 ring-gray-200 rounded text-center" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              />
              </div>
              </label>

            <label className="font-semibold">
                Confirm Password:
                <div>
            <input
             type="password"
              placeholder="*****" 
              className="mt-2 mb-2 py-2 px-4 ring-3 ring-gray-200 rounded text-center" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
             />
             </div>
            
        </label>

<div>
            <button 
            className="bg-blue-900 hover:bg-blue-700 rounded py-2 px-4 text-white font-semibold mt-4" type="submit">
                Create Account
                </button>
                </div>
            </form>
            <p 
            className="flex gap-2 justify-center mt-5 ">
                Already have an account?
                 <a href="#" className="bg-white-500 hover:bg-blue-700 text-white font-semibold">
                    Sign in
                    </a>
                    </p>
            </div>
    </>
    )
}
export default SignUp;