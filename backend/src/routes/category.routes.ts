import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Listar categorías - Próximamente' });
});

router.get('/:slug', (req, res) => {
  res.json({ message: `Categoría ${req.params.slug} - Próximamente` });
});

export default router;
