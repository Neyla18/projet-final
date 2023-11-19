import express from "express";
import {   handleRegister, handleConnection, logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleConnection);
router.post("/logout", logout);

export default router;