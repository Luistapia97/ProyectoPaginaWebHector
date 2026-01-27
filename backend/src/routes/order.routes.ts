import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  res.json({ message: 'Crear orden - Próximamente' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Orden ${req.params.id} - Próximamente` });
});

export default router;
