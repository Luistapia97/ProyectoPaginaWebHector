# ELECDATOS - Sitio Web Comercial

Sitio web completo para ELECDATOS con catálogo de productos, servicios y sistema de ventas.

## 🚀 Stack Tecnológico

### Backend
- **Node.js** con **TypeScript**
- **Express.js** - Framework de servidor
- **Prisma** - ORM para MySQL
- **MySQL** - Base de datos
- **PM2** - Gestor de procesos
- **Cloudinary** - Almacenamiento de imágenes
- **Stripe** - Pasarela de pagos
- **Resend** - Envío de emails

### Frontend
- **Next.js 14** - Framework React con SSR/SSG
- **TypeScript**
- **Tailwind CSS** - Estilos
- **Zustand** - State management
- **Axios** - HTTP client

## 📁 Estructura del Proyecto

```
PaginaWebHector/
├── backend/                 # API REST con Express + TypeScript
│   ├── src/
│   │   ├── routes/         # Rutas de la API
│   │   ├── controllers/    # Lógica de negocio
│   │   ├── middleware/     # Middlewares
│   │   └── server.ts       # Servidor principal
│   ├── prisma/
│   │   └── schema.prisma   # Modelos de base de datos
│   ├── .env.example        # Variables de entorno
│   └── package.json
│
├── frontend/               # Next.js con Tailwind
│   ├── src/
│   │   ├── app/           # App Router (Next.js 14)
│   │   ├── components/    # Componentes React
│   │   └── lib/           # Utilidades
│   ├── public/            # Assets estáticos
│   └── package.json
│
├── ecosystem.config.js    # Configuración PM2
└── package.json           # Scripts del proyecto
```

## 🛠️ Instalación y Configuración

### 1. Clonar e Instalar Dependencias

```bash
# Instalar dependencias raíz
npm install

# Instalar backend
cd backend
npm install

# Instalar frontend
cd ../frontend
npm install
```

### 2. Configurar Variables de Entorno

**Backend (.env):**
```bash
cd backend
cp .env.example .env
# Editar .env con tus credenciales
```

**Frontend (.env.local):**
```bash
cd frontend
cp .env.local.example .env.local
# Editar .env.local
```

### 3. Configurar Base de Datos

```bash
cd backend

# Generar cliente de Prisma
npm run prisma:generate

# Crear migración inicial
npm run prisma:migrate

# (Opcional) Abrir Prisma Studio
npm run prisma:studio
```

## 🚀 Ejecutar en Desarrollo

### Opción 1: Ejecutar Todo Simultáneamente
```bash
npm run dev
```

### Opción 2: Ejecutar por Separado

**Terminal 1 - Backend:**
```bash
npm run dev:backend
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
```

## 📦 Compilar para Producción

```bash
# Compilar backend y frontend
npm run build

# Ejecutar backend en producción
npm run start:backend

# Ejecutar frontend en producción
npm run start:frontend
```

## 🔧 PM2 (Producción en Hostinger)

```bash
# Iniciar con PM2
npm run pm2:start

# Ver logs
npm run pm2:logs

# Reiniciar
npm run pm2:restart

# Detener
npm run pm2:stop
```

## 🌐 URLs en Desarrollo

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Prisma Studio:** http://localhost:5555

## 📋 Endpoints Principales

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Usuario actual

### Productos
- `GET /api/products` - Listar productos
- `GET /api/products/:slug` - Producto por slug
- `POST /api/products` - Crear producto (Admin)
- `PUT /api/products/:id` - Actualizar producto (Admin)
- `DELETE /api/products/:id` - Eliminar producto (Admin)

### Categorías
- `GET /api/categories` - Listar categorías
- `GET /api/categories/:slug` - Categoría por slug

### Órdenes
- `POST /api/orders` - Crear orden
- `GET /api/orders/:id` - Obtener orden

### Servicios
- `GET /api/services` - Listar servicios
- `GET /api/services/:slug` - Servicio por slug

### Proyectos
- `GET /api/projects` - Listar proyectos
- `GET /api/projects/:slug` - Proyecto por slug

## 🎨 Características

✅ **Backend RESTful** con TypeScript  
✅ **Base de datos MySQL** con Prisma ORM  
✅ **Autenticación JWT**  
✅ **Rate Limiting** y seguridad con Helmet  
✅ **Optimización de imágenes** con Cloudinary  
✅ **SEO optimizado** con Next.js SSR/SSG  
✅ **Diseño responsive** con Tailwind CSS  
✅ **Pagos con Stripe**  
✅ **Emails transaccionales** con Resend  
✅ **PM2** para producción  

## 🔐 Seguridad

- Headers de seguridad con Helmet
- Rate limiting en todas las rutas
- Validación de datos con Zod
- Protección contra inyección SQL (Prisma)
- CORS configurado
- JWT para autenticación

## 📱 SEO

- Meta tags dinámicos por página
- Open Graph tags
- Sitemap.xml automático
- robots.txt
- URLs amigables (slugs)
- Imágenes optimizadas (WebP/AVIF)
- Core Web Vitals optimizado

## 🚀 Deploy en Hostinger

1. Compilar el proyecto: `npm run build`
2. Subir archivos vía FTP/Git
3. Configurar variables de entorno en panel
4. Ejecutar migraciones: `npm run prisma:deploy`
5. Iniciar con PM2: `npm run pm2:start`

## 📞 Soporte

Para problemas o consultas, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ para ELECDATOS**
