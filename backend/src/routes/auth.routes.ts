import { Router } from 'express';

const router = Router();

// Rutas de autenticación (implementación completa próximamente)
router.post('/register', (req, res) => {
  res.json({ message: 'Registro de usuario - Próximamente' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login de usuario - Próximamente' });
});

router.get('/me', (req, res) => {
  res.json({ message: 'Obtener usuario actual - Próximamente' });
});

export default router;
