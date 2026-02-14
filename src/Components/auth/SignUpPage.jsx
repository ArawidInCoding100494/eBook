import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Phone } from "lucide-react";
import axios from "axios";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userName = useRef();
  const userSurname = useRef();
  const userPhoneNumber = useRef();
  const userPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      name: userName.current.value,
      surname: userSurname.current.value,
      number: userPhoneNumber.current.value,
      password: userPassword.current.value,
    };

    try {
      const response = await axios.post(
        "http://192.168.0.193:2000/auth/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",

            "ngrok-skip-browser-warning": "true",
          },
        },
      );

      console.log("Muvaffaqiyatli:", response.data);
      alert("Ro'yxatdan o'tdingiz!");

      // Inputlarni tozalash
      userName.current.value = "";
      userSurname.current.value = "";
      userPhoneNumber.current.value = "";
      userPassword.current.value = "";
      navigate("/LoginPage");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert(
        "Xato: " +
          (error.response?.data?.message || "Server bilan bog'lanishda xato!"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-md" />
          <span className="text-xl font-bold">AcademiaLib</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            Already have an account?
          </span>
          <Link
            to="/LoginPage"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-sm font-medium"
          >
            Log In
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1">
        {/* LEFT PANEL */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-slate-900">
          <div className="max-w-md text-center px-10">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
              alt="Knowledge"
              className="rounded-xl mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">
              Unlock a World of Knowledge.
            </h1>
            <p className="text-gray-400">
              Join thousands of researchers, students, and avid readers.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex w-full lg:w-1/2 items-center justify-center">
          <div className="w-full max-w-md bg-slate-900 p-10 rounded-xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-2">Create account</h2>
            <p className="text-sm text-gray-400 mb-8">
              Start your journey today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <div className="relative mt-2">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 text-sm focus:outline-none focus:border-blue-600"
                    ref={userName}
                    required
                  />
                </div>
              </div>

              {/* SURNAME */}
              <div>
                <label className="text-sm text-gray-400">Surname</label>
                <div className="relative mt-2">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Enter your surname"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 text-sm focus:outline-none focus:border-blue-600"
                    ref={userSurname}
                    required
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm text-gray-400">Phone number</label>
                <div className="relative mt-2">
                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="+998901234567"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 text-sm focus:outline-none focus:border-blue-600"
                    ref={userPhoneNumber}
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm text-gray-400">Password</label>
                <div className="relative mt-2">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-10 text-sm focus:outline-none focus:border-blue-600"
                    ref={userPassword}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                disabled={loading}
                className={`w-full ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"} transition py-3 rounded-lg font-semibold`}
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
