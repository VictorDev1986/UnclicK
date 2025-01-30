import { Router } from "express";

const router = Router();

// Routing
// Agregar rutas
router.get('/', (req, res) => {
    res.send('Hola desde el servidor de Express / typescript');
});

router.get('/nosotros', (req, res) => {
     res.send('Esta es la página de nosotros');
});

router.get('/contacto', (req, res) => {
    res.send('Esta es la página de contacto');
});

export default router;