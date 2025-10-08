import { Router } from "express";
import { createAccount } from "./handlers";

const router = Router();

// Routing
// Agregar rutas

router.post('/Auth/register', createAccount )

export default router;