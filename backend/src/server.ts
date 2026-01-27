import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

// Importar rutas
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';
import categoryRoutes from './routes/category.routes';
import orderRoutes from './routes/order.routes';
import serviceRoutes from './routes/service.routes';
import projectRoutes from './routes/project.routes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// ============================================
// MIDDLEWARES DE SEGURIDAD
// ============================================

// Helmet para headers de seguridad
app.use(helmet());

// CORS configurado para el frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting para prevenir abuso
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo 100 requests por IP
  message: 'Demasiadas solicitudes desde esta IP, intenta nuevamente en 15 minutos.'
});

app.use('/api/', limiter);

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ============================================
// RUTAS
// ============================================

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API ELECDATOS - Soluciones de Infraestructura Industrial',
    version: '1.0.0',
    status: 'active',
    endpoints: {
      auth: '/api/auth',
      products: '/api/products',
      categories: '/api/categories',
      orders: '/api/orders',
      services: '/api/services',
      projects: '/api/projects'
    }
  });
});

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/projects', projectRoutes);

// Health check para PM2
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================
// MANEJO DE ERRORES
// ============================================

// 404 - Ruta no encontrada
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.path
  });
});

// Error handler global
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack);
  
  res.status(500).json({
    error: process.env.NODE_ENV === 'production' 
      ? 'Error interno del servidor' 
      : err.message
  });
});

// ============================================
// INICIAR SERVIDOR
// ============================================

app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════════╗
  ║                                               ║
  ║        🚀 ELECDATOS API Server                ║
  ║                                               ║
  ║  Puerto: ${PORT}                                 ║
  ║  Entorno: ${process.env.NODE_ENV || 'development'}                    ║
  ║  URL: http://localhost:${PORT}                   ║
  ║                                               ║
  ╚═══════════════════════════════════════════════╝
  `);
});

export default app;
