import { assets } from "../assets/assets";
import PropTypes from "prop-types";
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        className="border border-black px-8 py-4 text-sm text-white bg-black rounded-md hover:bg-white hover:text-black transition-all duration-500"
        onClick={() => setToken("")}
      >
        Logout
      </button>
    </div>
  );
};

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Navbar;
