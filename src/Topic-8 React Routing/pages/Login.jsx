import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Form, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../store/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUserData } = useAuth();

  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        { withCredentials: true },
      );

      console.log("data:", data);
      setUserData(data?.user);
      navigate("/", { replace: true });
    } catch (error) {}
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleLoginForm}
        className="min-w-100  bg-white rounded-2xl border-2 border-gray-200 p-8"
      >
        <div className="mb-5">
          <h3 className="text-center font-bold text-3xl mb-2.5">Ziggy</h3>
          <h3 className="text-center text-md font-semibold text-blue-500">
            Login for your favourite products
          </h3>
        </div>
        <div className="flex flex-col space-y-5 mb-5">
          <div>
            <label htmlFor="email" className="text-md font-semibold">
              Email<sup className="text-red-600">*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-3 py-2.5 border border-none shadow-gray-400 shadow-xs rounded-lg focus:outline-2  focus:outline-blue-500 focus:shadow-blue-400  mt-2"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-md font-semibold">
              Password<sup>*</sup>{" "}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="at least 8 characters"
                className="w-full px-3 py-2.5 border border-none shadow-gray-400 shadow-xs rounded-lg focus:outline-2  focus:outline-blue-500 focus:shadow-blue-400 mt-2"
                required
              />

              <div
                className="absolute top-5 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-3 py-2.5 border border-none bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-700"
          >
            Login
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 border-2 border-gray-300 bg-white text-gray-700 font-semibold rounded-lg cursor-pointer hover:bg-gray-200"
          >
            Login with google <FcGoogle size={28} />
          </button>
        </div>
        <p className="text-md text-gray-500 text-center">
          Create your account?{" "}
          <Link to="/register" className="text-blue-500 font-semibold">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
