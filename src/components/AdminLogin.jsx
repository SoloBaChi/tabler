import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './icons/LoadingSpinner';
import { toast, Toaster } from "react-hot-toast";

const AdminLogin = () => {
    const navigate = useNavigate()
    const[inputVal,setInputVal] = useState("");
    const[loading,setLoading] = useState(false)

    const addToLocalStorage = name => {
        localStorage.setItem("admin_name",name)
    };

    const handleChange  = e => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputVal){
         return toast.error("Please Enter user name to Login");
        }
        setLoading(true)
        addToLocalStorage(inputVal);

        // Wait for seconds before login
        setTimeout(()=> {
        navigate("/dashboard");
        setLoading(false);
        },3000)
        // setLoading(false)
    }
  return (
    <div className="form-container flex justify-center items-center h-screen">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <form onSubmit={handleSubmit} className='basis-[72%] m-auto'>
            <h4 className='text-gray-400 mb-4'>Welcome Back Tabler Admin</h4>
            <div className="form-field">
                <label htmlFor="name" className='inline-block text-[1.2rem] font-[500] text-gray-800'>User Name</label>
                <input className='rounded-[8px]' type="text" name='name' value={inputVal} onChange={handleChange}/>
            </div>
            <div className="text-left">
                <button className='inline-block p-3 border font-[600] bg-[#0088FE] text-white rounded-[8px] w-[120px]'>
                  {
                   loading ? <LoadingSpinner/> : "Login"
                  }
                </button>
            </div>
        </form>
    </div>
  )
}

export default AdminLogin