# 🌿 Green Haven — Next.js (App Router)

A modern and fully responsive cabin-booking UI built with the **Next.js App Router**, using **React Server Components**, **Server Actions**, **NextAuth authentication**, and polished UI interactions with **Framer Motion**.

🔗 **Live Demo:** [https://green-haven-demo.vercel.app/](https://green-haven-demo.vercel.app/)

---

## 🚀 Features

- Built with **Next.js App Router** (server-first architecture)
- Uses **React Server Components** wherever possible
- **Server Actions** for form submissions & mutations
- **NextAuth** authentication (Google Provider)
- Clean & reusable component architecture
- Fully responsive UI with **Tailwind CSS**
- Smooth UI transitions using **Framer Motion**
- Custom date selection, filters, and reservation flow
- Handles user profile editing + reservations management

---

## 🧰 Tech stack

- **Next.js (App Router)**
- **React** (Server + Client Components)
- **Tailwind CSS**
- **NextAuth**
- **date-fns**
- **Framer Motion**
- **Heroicons**
- **Vercel** (deployment)

---

## 📝 Project Structure

- `app/` — Next.js App Router pages & components

  - `_components/` — reusable UI components
  - `(pages)/` — your routed page files
  - `_context/` — context providers (e.g. reservation context)
  - `_lib/` — server helpers (auth, data-service, actions, supabase client)

- `public/` — images and static assets
- `globals.css` — global styles + Tailwind base

---

## 📦 Environment variables

Create a `.env.local` file in the project root and add the variables your app needs. Example variables used in this project:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Supabase (server-side keys)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_service_role_key_or_anon

# If you must use any keys on the client, expose them with NEXT_PUBLIC_
# (Only use anon/public keys client-side. Do not expose service_role or other secret keys.)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

> ⚠️ Security note: Never expose secret keys (service_role, admin keys) to the browser. Use server-side calls or API routes for any operation requiring secret credentials.

---

## ⚙️ Requirements

- Node.js 18+ recommended
- npm or yarn
- A Supabase project (if you use Supabase features)
- NextAuth provider credentials (Google) if you use social login

---

## 🛠️ Development

Install dependencies:

```bash
npm install
# or
# yarn
```

Run dev server:

```bash
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

---

## 🧩 How Server / Client split works in this project

- Files in `app/` are Server Components by default. They can `await` server-side helpers (e.g. `auth()` or DB calls).
- Add `"use client"` at the top of a file when you need interactivity (hooks, event handlers, local state).
- Avoid importing server-only modules (that use `process.env` secrets) directly into Client Components — that causes runtime errors and hydration mismatch.
- Pattern used in this repository:

  - Fetch session or DB data in Server Components (async), then pass them down as props to Client Components when interactivity is needed.
  - Alternatively, use small client-only fetches to API routes if you prefer not to pass props.

---

## ✅ Common gotchas & troubleshooting

- **`supabaseKey is required`** — This happens when your Supabase client is created on the client-side with an undefined key. Keep the service key on the server and only expose public anon keys to the browser using `NEXT_PUBLIC_...` variables.

- **Hydration mismatch warnings** — usually caused by rendering different HTML on server vs client (e.g. using `Math.random()`, locale-dependent `Date` formatting, or rendering session-only content on the server without matching client output). Solutions:

  - Make the component a Client Component and fetch session there.
  - Or render a stable placeholder on the server and hydrate session-specific content on the client.

- **Next Image host not configured** — If you use external avatar images (e.g. Google avatar), add the host to `next.config.js` under `images.domains`.

Example `next.config.js` snippet:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "your-cdn.com",
    ],
  },
};
module.exports = nextConfig;
```

- **CRLF / LF warnings on Windows** — Add a `.gitattributes` file to the repo root to normalize line endings or set `git config core.autocrlf true`.

Example `.gitattributes`:

```gitattributes
* text=auto
```

---

## ✅ Deployment

**Vercel** is the most straightforward option for Next.js `app` router projects:

1. Push your repo to GitHub (or Git provider).
2. Connect it to Vercel and configure environment variables in the Vercel dashboard.
3. Deploy — Vercel will run the Next.js build automatically.

Other providers (Netlify, Render) can work but require extra configuration for the app router.

---

## 🎬 Framer Motion notes

- The project uses Framer Motion for entrance animations and small hover/scale interactions. Keep animations lightweight to avoid affecting perceived performance.
- Use `initial`/`animate`/`exit` for page-level transitions and `whileHover`/`whileTap` for interactive elements.

---
