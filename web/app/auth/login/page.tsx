import React from "react";
import Ig from "@/app/src/assets/ig.png";
import { LoginBtn } from "@/app/components/btn/LoginBtn";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";

const Login = () => {
  return (
    <div className="max-h-screen flex flex-col items-center justify-center">
      <div className="border-slate-300 border mt-28 flex items-center justify-center flex-col px-10">
        <div className="mt-10">
          <Image alt="instagram logo" src={Ig} width={150} height={150} />
        </div>
        <div className="w-[19rem] text-center items-center flex justify-center flex-col">
          <form className="pt-5">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="py-2 w-[19rem] rounded text-xs ps-3 mb-2 border"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-2 w-[19rem] rounded text-xs ps-3 mb-2 border"
            />
            <LoginBtn
              text="Log in"
              color="bg-blue-400"
              className="w-[19rem] mt-3"
            />
          </form>
          <div className="relative w-[19rem] mb-3 mt-2">
            <div className="h-0.5 bg-slate-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-sm text-slate-400">OR</span>
            </div>
          </div>
          <button className="my-5 text-blue-900 py-1 w-[19rem] flex items-center text-sm justify-center">
            <FaFacebookSquare className="text-blue-900 me-2" size={20} />
            <h1>Log in with Facebook</h1>
          </button>
          <button className="text-[0.75rem] mb-5">Forgot Password ?</button>
        </div>
      </div>
      <div className="border mt-5 flex items-center justify-center w-[24.2rem] py-5 gap-1 text-sm">
        <h1>Don't have an account?</h1>
        <a className="font-bold text-blue-700" href="/auth/register">
          Sign up
        </a>
      </div>

      <div className="mt-64 gap-5 grid grid-cols-10 text-xs text-slate-600 mb-5 w-1/2 text-center">
        <a href="" className="hover:underline">
          About
        </a>
        <a href="" className="hover:underline">
          Blog
        </a>
        <a href="" className="hover:underline">
          Jobs
        </a>
        <a href="" className="hover:underline">
          Help
        </a>
        <a href="" className="hover:underline">
          API
        </a>
        <a href="" className="hover:underline">
          Privacy
        </a>
        <a href="" className="hover:underline">
          Cookie
        </a>
        <a href="" className="hover:underline">
          Terms
        </a>
        <a href="" className="hover:underline">
          Location
        </a>
        <a href="" className="hover:underline">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Login;
