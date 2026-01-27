import { Router } from 'express';

const router = Router();

// Rutas de productos
router.get('/', (req, res) => {
  res.json({ message: 'Listar productos - Próximamente' });
});

router.get('/:slug', (req, res) => {
  res.json({ message: `Producto ${req.params.slug} - Próximamente` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Crear producto - Próximamente' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Actualizar producto - Próximamente' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Eliminar producto - Próximamente' });
});

export default router;
