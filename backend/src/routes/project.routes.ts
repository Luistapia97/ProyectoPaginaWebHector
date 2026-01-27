import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Listar proyectos - Próximamente' });
});

router.get('/:slug', (req, res) => {
  res.json({ message: `Proyecto ${req.params.slug} - Próximamente` });
});

export default router;
