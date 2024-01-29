import Image from "next/image";
import Ig from "@/app/src/assets/ig.png";
import { FaFacebookSquare } from "react-icons/fa";
import { LoginBtn } from "@/app/components/btn/LoginBtn";

const Register = () => {
  return (
    <div className="max-h-screen flex flex-col items-center justify-center">
      <div className="border mt-5 flex items-center justify-center flex-col px-10">
        <Image alt="instagram logo" src={Ig} width={200} height={200} />
        <div className="w-[18rem] text-center items-center flex justify-center flex-col">
          <h1 className="font-bold text-base text-slate-500">
            Sign up to see photos and videos from your friends.
          </h1>

          <LoginBtn icon={FaFacebookSquare} text="Log in with facebook" />

          <form className="border-t-2 pt-5 mx-6 mb-5">
            <input
              type="text"
              placeholder="Mobile Number or Email"
              className="py-2 w-[15rem] rounded text-xs ps-3 mb-2 border"
            />

            <input
              type="text"
              placeholder="Full Name"
              className="py-2 w-[15rem] rounded text-xs ps-3 mb-2 border"
            />
            <input
              type="text"
              placeholder="Username"
              className="py-2 w-[15rem] rounded text-xs ps-3 mb-2 border"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-2 w-[15rem] rounded text-xs ps-3 mb-2 border"
            />

            <div>
              <p className="text-xs text-slate-400 mb-4">
                People who use our service may have uploaded your contact
                information to Instagram. Learn More
              </p>
              <p className="text-xs text-slate-400">
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy .
              </p>
            </div>
            <LoginBtn text="Sign up" color="bg-blue-300"/>
          </form>
        </div>
      </div>
      <div className="border mt-5 flex items-center justify-center w-[23rem] py-10 gap-3 text-sm">
        <h1>Have an account?</h1>
        <a className="font-bold text-blue-700" href="/login">
          Log in
        </a>
      </div>

      <div className="mt-5 gap-5 grid grid-cols-10 text-xs text-slate-600 mb-5 w-1/2 text-center">
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

export default Register;
