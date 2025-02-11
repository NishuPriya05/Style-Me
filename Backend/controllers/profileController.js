import orderModel from "../models/orderModel.js";

const getUserDetails = async (req, res) => {
  try {
    // Find the latest order for the logged-in user
    const latestOrder = await orderModel.findOne({ userId: req.user.id }).sort({ date: -1 });

    if (!latestOrder) {
      return res.status(404).json({ success: false, message: "No orders found for this user" });
    }

    // Extract user details from the order's address field
    const userDetails = {
      name: latestOrder.address.name,
      email: latestOrder.address.email,
      mobile: latestOrder.address.mobile,
      address: latestOrder.address, // Full address object
    };

    res.json({ success: true, user: userDetails });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { getUserDetails };
