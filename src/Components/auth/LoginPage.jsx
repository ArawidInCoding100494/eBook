import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Trophy, User } from "lucide-react";
import axios from "axios";
import { UseGlobalContext } from "../../Hooks/UseGlobalContext";

const LoginPage = () => {
  const { dispatch } = UseGlobalContext();
  const [isIdLogin, setIsIdLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userPhoneNumber = useRef();
  const userPassword = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isIdLogin) {
        // ID LOGIN
        const idInput = e.target
          .querySelector('input[type="text"]')
          .value.trim();

        if (!idInput) {
          alert("Please enter your ID");
          return;
        }

        const response = await axios.post(
          `http://192.168.0.193:2000/auth/login`,
          {
            method: "id",
            identifier: idInput,
          },
        );

        
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.href = "/dashboard";  

        console.log("Login success (ID):", response.data);

        // ID inputni bo‘sh qilamiz
        // e.target.querySelector('input[type="text"]').value = "";
      } else {
        // PHONE LOGIN
        if (
          !userPhoneNumber.current.value.trim() ||
          !userPassword.current.value.trim()
        ) {
          alert("Please fill all fields");
          return;
        }

        const response = await axios.post(
          "http://192.168.0.193:2000/auth/login",
          {
            method: "number",
            identifier: userPhoneNumber.current.value,
            password: userPassword.current.value,
          },
        );

        console.log("Login success (Phone):", response.data);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        window.location.href = "/dashboard";  
      }

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login muvaffaqiyatsiz. Iltimos qayta urinib ko‘ring");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-md" />
          <span className="text-xl font-bold">Library</span>
        </div>

        <div className="flex items-center gap-8">
          <Link to="#" className="text-sm text-gray-400 cursor-pointer">
            Books
          </Link>
          <Link to="#" className="text-sm text-gray-400 cursor-pointer">
            Academic
          </Link>
          <Link
            to="/SignUpPage"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-sm font-medium"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1">
        {/* LEFT PANEL */}
        <div
          className="hidden lg:flex w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(https://images.unsplash.com/photo-1544652478-6653e09f18a2)",
          }}
        >
          <div className="absolute bottom-16 left-16 max-w-xl">
            <h1 className="text-5xl font-bold leading-tight">
              Your gateway to knowledge and imagination.
            </h1>
            <p className="text-gray-300 mt-4">
              Dive back into your favorite stories or pick up where you left
              off.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex w-full lg:w-1/2 items-center justify-center">
          <div className="w-full max-w-md bg-slate-900 p-10 rounded-xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-6">Welcome Back</h2>

            {/* ID TOGGLE */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-gray-400">You have ID</span>
              <button
                onClick={() => setIsIdLogin(!isIdLogin)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition ${
                  isIdLogin
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-slate-800 border-slate-700 text-gray-400"
                }`}
              >
                <Trophy size={14} />
                <span className="text-xs font-semibold">ID LOGIN</span>
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {isIdLogin ? (
                <div>
                  <label className="text-sm text-gray-400">
                    Student / Member ID
                  </label>
                  <div className="relative mt-2">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Enter your unique ID"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Use your library card ID to quickly sign in.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-sm text-gray-400">
                      Phone Number
                    </label>
                    <input
                      ref={userPhoneNumber}
                      required
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Password</label>
                    <div className="relative mt-2">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        ref={userPassword}
                        placeholder="Enter your password"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-600"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}

              <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold">
                {isIdLogin ? "Access with ID" : "Sign In"}
              </button>
            </form>

            {/* FOOTER */}
            <p className="text-center text-sm text-gray-400 mt-8">
              Don&apos;t have an account?{" "}
              <Link to="/SignUpPage" className="text-blue-500 hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
