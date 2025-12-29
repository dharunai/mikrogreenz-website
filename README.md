# Mikro Greenz Global

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/b82017c1-d1e1-452d-b9c7-06b2f5f4d6be

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b82017c1-d1e1-452d-b9c7-06b2f5f4d6be) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Running on locked-down / no-admin PCs (Portable Node)

If you can't install Node.js via MSI (office-managed device), you can use the official **Windows ZIP** distribution instead.

1) Download **Node.js LTS** for Windows as a **.zip** (not .msi)
2) Extract it to one of these locations:
	- Recommended for this repo: `tools/node/` (so the path becomes `tools/node/node.exe`)
	- Or anywhere you can write to (e.g. `C:\Users\<you>\Tools\node\node-vXX-win-x64\`)
3) Run the dev server:

```powershell
./scripts/run-dev.ps1

# OR, if you extracted Node somewhere else:
./scripts/run-dev.ps1 -NodeHome "C:\Users\<you>\Tools\node\node-vXX-win-x64"
```

To build and preview:

```powershell
./scripts/run-build.ps1
```

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact form (stays on-site + sends to your email)

The Contact section submits **without opening a mail app** and sends the message to your inbox via a Supabase Edge Function:

- Frontend calls the Edge Function named `contact`
- The Edge Function sends an email using **Resend** (configured via env vars)

### Required Supabase Edge Function env vars

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (must be a verified Resend sender, e.g. `MikroGreenz <noreply@yourdomain.com>`)
- `CONTACT_TO_EMAIL` (optional, defaults to `mikrogreenz.global@gmail.com`)

### Deploying the function

From your Supabase project / CLI:

```sh
supabase functions deploy contact
```

Then set the env vars for the function in your Supabase dashboard (or via CLI, depending on your workflow).

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b82017c1-d1e1-452d-b9c7-06b2f5f4d6be) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
