# Ennem Growth Labs

Product + engineering studio site for Ennem (Theni). Dark HUD UI. Own products first: TaskWagon, GIFT, Snapvy, Lumen.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind · Framer Motion · GSAP · Prisma · MySQL · ESLint · Prettier · Husky · Docker

Pages work **without** MySQL (static data in `src/lib/data.ts`). Contact form needs Prisma + MySQL.

## Local (no Docker)

Run from **this folder** (`D:\Ennem_growth_labs\Ennem_Growth_Labs`) — `src`, Prisma, and `package.json` all live here.

```bash
cd D:\Ennem_growth_labs\Ennem_Growth_Labs
npm install
npm run dev
```

Open **http://localhost:3000**

## MySQL + seed

```bash
docker compose up -d mysql
# wait until healthy, then:
npx prisma migrate dev --name init
npm run db:seed
```

`.env` (see `.env.example`):

```
DATABASE_URL="mysql://ennem:ennemsecret@localhost:3306/ennem_growth_labs"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## Full Docker (app + MySQL)

```bash
docker compose up --build
```

Nginx profile: `docker compose --profile full up --build`

## Scripts

| Command | What |
|---|---|
| `npm run dev` | Next dev (Turbopack) |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run db:seed` | Seed teams, live projects, posts, jobs |
| `npm run db:studio` | Prisma Studio |

## REPLACE_ME

- Team photos / real names (do not use the duplicated marketing-site roster)
- Tadbit live URL
- Exact marketing stats if they differ from 63+ / 98%
