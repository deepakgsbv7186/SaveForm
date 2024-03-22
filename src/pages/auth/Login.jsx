import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 bg-slate-700 rounded-md shadow-md lg:w-3/12 md:w-6/12 w-[90%]">
        <form onSubmit={handleSubmit} method="post">
          <Input
            label={"email"}
            placeholder={"abc@email.com"}
            type={"email"}
            value={userData.email}
            onChange={handleChange}
          />
          <Input
            label={"password"}
            placeholder={"your password here..."}
            type={"password"}
            password
            value={userData.password}
            onChange={handleChange}
          />
          <div className="my-6">
            <button className="text-xl text-white font-semibold text-center bg-slate-500 p-1 w-full rounded-md">
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <span className="text-base text-white">
            Didn't have account?{" "}
            <Link to={"/register"} className="underline">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
