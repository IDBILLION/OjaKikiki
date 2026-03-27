import { useState } from "react";

function SignUp() 
{
    const initialValue = {fullName: "", email: "", password: "", confirmPassword: ""};
   const [formData, setFormData] = useState({initialValue});
   const [errors, setErrors] = useState({});
   const [success, setSuccess] = useState(false);

  
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

   function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  }

   function handleSubmit (e) {
e.preventDefault();
const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      console.log("Signup data:", formData);
      setSuccess(true);

         setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

 return(
        <>
        <div className="bg-blue-200  mt-10 md:w-1/3 mx-auto grid grid-cols-1 rounded-xl text-indigo-600 p-5 text-center">
        <h2 className="font-medium text-3xl my-4"> 
        Create your Account 
        </h2>

         {success && (
        <p className="success-message">Signup successful 🎉</p>
      )}

        <p className="mb-6 font-medium"> 
        Join us today and get started 
         </p> 
        <form className="justify-center ml-7" onSubmit={handleSubmit} noValidate>
            <label className="font-semibold">
                Full Name:
                <div>
            <input 
            type="text"
            placeholder="Aderemi Idris"
             className="bg-[#fff] w-1/2 p-1 font-semibold ring-2 ring-gray-500 text-center m-2 rounded focus:ring-2 focus:ring-[#1e90ff] focus:border-[#1e90ff] focus:outline-none"  
             name="name"
             value={formData.fullName}
             onChange={handleChange} 
             />
             </div>
{errors.fullName && <span className="error">{errors.fullName}</span>}
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
{errors.email && <span className="error">{errors.email}</span>}
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
 {errors.password && (
            <span className="error">{errors.password}</span>
          )}
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
               {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
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
