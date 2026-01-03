🌱 MikroGreenz Global – Official Website

MikroGreenz Global is pioneering the future of nutrition through GMP-certified microgreens, proprietary cultivation technology, and sustainable urban farming solutions designed for B2B partnerships.

This repository contains the source code for the official MikroGreenz Global website.

🚀 Project Overview

Brand: MikroGreenz Global

Focus: B2B Microgreens, Partnerships, Sustainable Nutrition

Industry: AgriTech · FoodTech · Health & Wellness

Website Type: Static frontend with backend integrations

Deployment: Hostinger (GitHub-based deployment)

🧩 Tech Stack

Frontend

Vite

React + TypeScript

HTML5 / CSS3

Google Fonts (Poppins, Open Sans)

Backend & Services

Supabase (Database & Edge Functions)

Supabase Edge Functions (Contact form automation)

Resend (Email notifications)

Hosting & Infrastructure

Hostinger (Static Hosting + GitHub integration)

GoDaddy (Domain provider)

✨ Key Features

⚡ Fast, lightweight Vite-based frontend

📩 Contact form with Supabase database storage

✉️ Automated email notifications (Admin + User)

🔐 Secure environment variable handling

📈 SEO-optimized metadata (B2B & partnership focused)

🌍 Scalable architecture for future features

📁 Project Structure
mikrogreenz-website/
├── public/
│   ├── favicon.svg
│   └── assets/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── main.tsx
│   └── App.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md

🔐 Environment Variables

This project uses environment variables for frontend configuration.

Create a .env file (or configure via Hostinger):

VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key


⚠️ Important

Only variables prefixed with VITE_ are exposed to the frontend

Sensitive keys (service role, email API keys) are stored only in Supabase

🛠️ Local Development
1️⃣ Install dependencies
npm install

2️⃣ Start development server
npm run dev

3️⃣ Build for production
npm run build

🌐 Deployment Workflow

Push changes to the main branch

Hostinger automatically:

Pulls code from GitHub

Injects environment variables

Builds the project

Deploys to production

Domain mapped via Hostinger DNS

Free SSL enabled

🔍 SEO & Metadata

B2B-focused meta title & description

Open Graph & Twitter Card support

Optimized for partnership & industry searches

Google indexing enabled

📬 Contact Form Flow

User submits contact form

Data stored securely in Supabase

Supabase Edge Function triggers:

Admin notification email

User confirmation email

Email delivery handled via Resend API

🧠 Future Enhancements

Industry-specific landing sections

B2B partner onboarding flows

AI-powered chatbot

CMS integration (optional)

Advanced SEO schema (Organization / Product)

📄 License

© 2026 MikroGreenz Global.
All rights reserved.

🤝 Partnerships

Interested in collaborating or partnering with MikroGreenz Global?
Reach out via the website contact form.
