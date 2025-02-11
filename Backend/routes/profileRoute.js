import express from "express";
import {getUserDetails} from "../controllers/profileController.js";

const profileRouter = express.Router();

profileRouter.get("/details", getUserDetails);
export default profileRouter;
