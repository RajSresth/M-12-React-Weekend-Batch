import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // {fullname = value}
    setForm({ ...form, [name]: value });
  };

  const handleSingupForm = async (e) => {
    e.preventDefault();


    // console.log("fullname:",form.fullname);
    // console.log("Email:",form.email);
    // console.log("Password:",form.password);

    // setForm({
    //         fullname: "",
    //         email: "",
    //         password: "",
    //     })

    try {
      const { data } = axios.post(
        "https://theindianhome.in/api/auth/register",
        {
          form,
        },
        { withCredentials: true },
      );
      console.log("data:", data);
    } catch (error) {
      console.log("Signup Error:", error.response.data);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action=""
        className="min-w-100  bg-white rounded-2xl border-2 border-gray-200 p-8"
        onSubmit={handleSingupForm}
      >
        <div className="mb-5">
          <h3 className="text-center font-bold text-3xl mb-2.5">Ziggy</h3>
          <h3 className="text-center text-md font-semibold text-blue-500">
            Signup for delicious food
          </h3>
        </div>
        <div className="flex flex-col space-y-5 mb-5">
          <div>
            <label htmlFor="username" className="text-md font-semibold">
              Fullname<sup className="text-red-600">*</sup>
            </label>
            <input
              type="text"
              id="username"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Enter fullname"
              required
              className="w-full px-3 py-2.5 border border-none shadow-gray-400 shadow-xs rounded-lg focus:outline-2  focus:outline-blue-500 focus:shadow-blue-400  mt-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-md font-semibold">
              Email<sup className="text-red-600">*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
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
                value={form.password}
                onChange={handleChange}
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
            Signup
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 border-2 border-gray-300 bg-white text-gray-700 font-semibold rounded-lg cursor-pointer hover:bg-gray-200"
          >
            Signup with <FcGoogle size={28} />
          </button>
        </div>
        <p className="text-md text-gray-500 text-center">
          Already have an account?
          <a href="" className="text-blue-500 font-semibold">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
