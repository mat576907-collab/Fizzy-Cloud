# FizzyHost — Premium Game Server Hosting Website

A full-featured, animated game server hosting website for FizzyHost, built with TanStack Start (React), Tailwind CSS, and Netlify Identity.

## Features

- **Homepage** — Animated hero, stats counters, plan preview, features grid, node status, testimonials, FAQ accordion, and footer
- **Hosting Plans** — Monthly/yearly toggle with savings, all 5 plans (Copper → Obsidian), payment methods display
- **Features Page** — Full feature grid (16+ features), Pterodactyl panel details, supported games list
- **Node Status** — Live node status table with CPU/RAM usage bars for all 18 nodes worldwide
- **About, Contact, Legal Pages** — About us, contact form, Terms, Privacy Policy, Refund Policy
- **Knowledge Base** — Searchable FAQ with category filtering
- **Authentication** — Login/Register with email+password and Google OAuth via Netlify Identity
- **Admin Panel** — Protected dashboard for managing plans and announcements

## Tech Stack

- **Framework**: TanStack Start (React) + Vite
- **Styling**: Tailwind CSS v4 + custom CSS animations
- **Auth**: Netlify Identity (`@netlify/identity`)
- **Icons**: Lucide React

## Local Development

```bash
npm install
netlify dev
```

Open http://localhost:8888

## Admin Access

1. Visit `/login` and register with `shopdaksh@gmail.com` or `mat576907@gmail.com`
2. Go to the Netlify dashboard → Identity → set the role to `admin`
3. Access the admin panel at `/admin`
