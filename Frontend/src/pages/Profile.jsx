import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const { token, backendUrl } = useContext(ShopContext);
  const [user, setUser] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You need to log in first.");
        return;
      }

      const response = await axios.get(backendUrl + "/api/profile/details", {
        headers: { token },
      });

      if (response.data.success) {
        console.log("User Data:", response.data.user);
        setUser(response.data.user); // Store user details in state
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching user details.");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [token]);

 
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
      <h3 className="text-2xl font-semibold text-gray-800 text-center">
        My Profile
      </h3>
      {user ? (
        <div className="mt-4 text-lg">
          <p className="text-gray-700">
            <span className="font-semibold">Full Name:</span> {user.fullName}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Mobile:</span> {user.mobile}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Address:</span>
            {user.street + ", "}
            {user.city + ", " + user.state + ", " + user.pincode}
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-4">Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;


// import express from "express";
// import { getUserDetails } from "../controllers/userController.js";
// import authUser from "../middleware/auth.js";

// const profileRouter = express.Router();

// profileRouter.get("/details", authUser, getUserDetails);

// export default profileRouter;
