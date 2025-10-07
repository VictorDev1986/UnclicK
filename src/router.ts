import { Router } from "express";
const router = Router();

// Routing
// Agregar rutas
router.get('/', (req, res) => {
    res.send('Hola desde el servidor de Express / typescript');
});

router.post('/Auth/register', (req, res) => {
    console.log(req.body);
});


export default router;