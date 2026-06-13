# Database Setup

## 1. Install dependencies
```powershell
npm install prisma @prisma/client
```

## 2. Initialize the database
```powershell
npx prisma migrate dev --name init
```

## 3. Generate Prisma client
```powershell
npx prisma generate
```

## 4. (Optional) Seed the database
```powershell
npx tsx prisma/seed.ts
```

## 5. Run the app
```powershell
npm run dev
```

## Switch to PostgreSQL
Edit `.env`:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```
Then run:
```
npx prisma migrate deploy
```
