import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


const Login = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
    .post("http://localhost:3500/user/login",userInfo,{
      headers: { "Content-Type": "application/json" },
    })
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("login Successfully")
        // alert("login successfull")
        localStorage.setItem("token", res.data.token);
        setIsAuthenticated(true)
        document.getElementById("my_modal_3").close()
        // Navigate("/signup")
        navigate("/");
        window.location.reload()
      }
      
    })
    .catch((err) => {
      console.log(err);
      // alert("invalid credentials")
      toast.error("Error in Login");
    })
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal p-20 ">
          <div className="modal-box  bg-gray-900">
            <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold  text-center text-2xl">Login</h3>

              <div>
                <span className="mt-4 text-xl">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="text-black px-3 py-1  rounded-md w-full border outline-none"
                  {...register("email", { required: true })}
                ></input>
                <br />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* password */}
              
              <div className="mt-4">
                <span className="mt-4 text-xl">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter The Password"
                  className="text-black px-3 py-1 w-full rounded-md border outline- one"
                  {...register("password", { required: true })}
                ></input>
                <br />
                {errors.password && (
                  <span className="text-red-600 text-sm">
                    *This field is required*
                  </span>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-800">
                  Login
                </button>
                <p className="mt-2">
                  Not register?
                  <Link
                    to={"/signup"}
                    className="underline text-blue-400 cursor-pointer hover:text-blue-800"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;