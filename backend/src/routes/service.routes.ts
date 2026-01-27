import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Listar servicios - Próximamente' });
});

router.get('/:slug', (req, res) => {
  res.json({ message: `Servicio ${req.params.slug} - Próximamente` });
});

export default router;
