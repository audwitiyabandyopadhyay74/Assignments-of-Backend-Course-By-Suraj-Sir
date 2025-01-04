import { Router } from "express";
import { Login } from "../controller/auth.controller.js";
import { Logout } from "../controller/auth.controller.js";
const router = Router();


router.post("/login", Login)



router.post("/logout", Logout)

export default router;