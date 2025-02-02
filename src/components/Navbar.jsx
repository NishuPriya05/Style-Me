import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleOrders = (event) => {
    event.preventDefault();
    navigate("/orders");
  };
  return (
    <div className="flex items-center justify-between py-0 font-medium">
      <Link to="/">
        <img
          src={assets.logo}
          className="h-16 w-24 sm:h-20 sm:w-28 md:h-28 md:w-40 cursor-pointer"
          alt=""
        />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-500 ${
                isActive
                  ? "text-orange-700 border-b-2 border-red-700  lg:border-b-2 lg:border-red-700 lg:p-0"
                  : "text-gray-700 hover:text-orange-700"
              } md:p-1 lg:p-0`
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-orange-700 border-b-2 border-red-700  lg:border-b-2 lg:border-red-700 lg:p-0"
                  : "text-gray-700 hover:text-orange-700"
              } md:p-1 lg:p-0`
            }
          >
            COLLECTION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-orange-700 border-b-2 border-red-700  lg:border-b-2 lg:border-red-700 lg:p-0"
                  : "text-gray-700 hover:text-orange-700"
              } md:p-1 lg:p-0`
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-orange-700 border-b-2 border-red-700  lg:border-b-2 lg:border-red-700 lg:p-0"
                  : "text-gray-700 hover:text-orange-700"
              } md:p-1 lg:p-0`
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-4 sm:w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <Link to="/login">
            <img
              className="w-4 sm:w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-xl">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p
                onClick={handleOrders}
                className="cursor-pointer hover:text-black"
              >
                Orders
              </p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-4 sm:w-5 sm:min-w-5"
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-xs">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer block md:hidden lg:hidden"
          alt=""
        />
      </div>
      {/* Sidebar for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className={({ isActive }) =>
              `py-2 pl-6 border ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-orange-700"
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className={({ isActive }) =>
              `py-2 pl-6 border ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-orange-700"
              }`
            }
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className={({ isActive }) =>
              `py-2 pl-6 border ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-orange-700"
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className={({ isActive }) =>
              `py-2 pl-6 border ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-orange-700"
              }`
            }
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
