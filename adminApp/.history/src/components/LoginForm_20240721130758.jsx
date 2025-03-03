import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../service/auth-service";
import logo from "../assets/LOGO.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(mail, password);
      navigate("/dashboard");
    } catch (e) {
      setError("Incorrect logins");
    }
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
          <h2 className="text-xl ml-3">
            <span style={{ color: "#FA9746" }} className="font-bold">Happy IN- Happy OUT</span>
          </h2>
        </div>
      </header>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <div
          style={{ borderColor: "#B0D0FF" }}
          className="border-2 rounded-lg p-8 w-full max-w-md drop-shadow bg-white"
        >
          <div className="text-center mb-8">
            <h3 style={{ color: "#233863" }} className="font-semibold text-xl">
              Welcome back!
            </h3>
          
          </div>
          {error && (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
              <span className="font-medium">Error: </span> {error}
            </div>
          )}
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              style={{
                borderColor: "#B0D0FF",
              }}
              className="shadow-inner bg-gray-50 border w-full max-w-xs text-sm rounded-3xl p-2.5 mb-4"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderColor: "#B0D0FF",
              }}
              className="shadow-inner bg-gray-50 border w-full max-w-xs text-sm rounded-3xl p-2.5 mb-5"
              required
            />
            <button
              type="submit"
              style={{ backgroundColor: "#5764A0" }}
              className="w-full max-w-xs px-6 py-3.5 text-base font-bold text-white rounded-lg"
            >
              Log in
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
