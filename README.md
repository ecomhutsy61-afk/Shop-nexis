# Art Supplies E-Commerce

A full-stack, production-ready e-commerce website built with Next.js 16, Prisma, and PostgreSQL.

## Tech Stack
- Frontend: Next.js 16 (App Router, Server Components)
- Backend: Next.js API routes
- Database: PostgreSQL
- ORM: Prisma
- Styling: Tailwind CSS
- State Management: Zustand (cart)
- Payments: Stripe (ready for integration)

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up PostgreSQL
Make sure you have PostgreSQL running locally with the following credentials (or update `.env`):
```
DATABASE_URL="postgresql://admin:admin@localhost:5432/artdb"
```

### 3. Run Prisma Migrations
```bash
npx prisma migrate dev --name init
```

### 4. Seed the Database
```bash
npm run db:seed
```

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Panel
- Login: `/admin/login`
- Credentials:
  - Username: `admin`
  - Password: `admin`
- Features:
  - Dashboard with stats
  - Products management (add, edit, delete)
  - Orders management

## Project Structure
```
app/
  ├── api/              # API routes
  ├── (frontend)/       # Public pages
  ├── admin/            # Admin panel
  ├── layout.tsx        # Root layout
  └── page.tsx          # Homepage
components/            # Reusable components
lib/                   # Utilities (Prisma, Zustand, auth)
prisma/                # Prisma schema and seed
public/                # Static assets (images, logo, etc.)
```
