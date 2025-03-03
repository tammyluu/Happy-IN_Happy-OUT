import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  return (
    <div className="bg-[#5764A0] w-screen flex items-center justify-between py-4 shadow-lg px-5">
      <Link to="/dashboard" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10" />
        <h2 className="text-2xl text-white">
          <span>Happy IN- Happy OUT</span>
        </h2>
      </Link>
      <Link to="/form" className="flex items-center justify-end">
        <button
          style={{ backgroundColor: "#3586FD" }}
          className="px-6 py-2 text-base font-bold text-white rounded-full flex items-center drop-shadow-lg"
        >
          <i className="bi bi-plus-circle-fill me-2"></i>Add employee
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
