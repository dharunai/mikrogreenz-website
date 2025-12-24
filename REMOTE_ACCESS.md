# Remote Access Guide for MikroGreenz Website

This guide provides multiple ways to access and share your MikroGreenz website project remotely for development, testing, and production deployment.

## 🔐 Remote Access Code

The website is now protected with a **Remote Access Gate** that requires an access code to view the site.

**Access Code:** `1F71-EFA5`

When you visit the website (via any method below), you'll be prompted to enter this code before accessing the content. The authentication persists in your browser's localStorage until you logout or clear browser data.

### Security Note

**Important:** This is a client-side authentication mechanism intended for development and preview environments. The access code is embedded in the JavaScript bundle and can be discovered by inspecting the source code. 

This provides basic access control for:
- Sharing development previews with stakeholders
- Protecting work-in-progress from casual discovery
- Demonstrating auth concepts

**For production environments with sensitive content**, consider:
- Server-side authentication (OAuth, JWT)
- Platform-specific features (Vercel Password Protection, Netlify Identity)
- Environment-based configuration (disable gate in production)

### Managing Access Code

To change the access code or disable the gate:
1. Edit `src/config/remoteAccess.ts`
2. Change the `ACCESS_CODE` value
3. Set `ENABLED: false` to disable the access gate entirely

## Table of Contents
1. [Local Network Access](#local-network-access)
2. [Internet Access via Tunneling](#internet-access-via-tunneling)
3. [Production Deployment](#production-deployment)
4. [GitHub Codespaces](#github-codespaces)

---

## Local Network Access

Access your development server from other devices on the same local network (WiFi/LAN).

### Setup
The Vite dev server is already configured to bind to all network interfaces (`host: "::"`).

### Steps

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Find your local IP address:**

   **On Windows:**
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" under your active network adapter.

   **On Mac/Linux:**
   ```bash
   ifconfig
   # or
   ip addr show
   ```
   Look for an address like `192.168.x.x` or `10.x.x.x`

3. **Access from other devices:**
   Open a browser on any device connected to the same network:
   ```
   http://YOUR_IP_ADDRESS:8080
   ```
   Example: `http://192.168.1.100:8080`

### Firewall Note
If you can't connect, ensure your firewall allows incoming connections on port 8080:
- **Windows**: Open Windows Defender Firewall → Allow an app
- **Mac**: System Preferences → Security & Privacy → Firewall
- **Linux**: `sudo ufw allow 8080/tcp` (for ufw users)

---

## Internet Access via Tunneling

Access your local development server from anywhere on the internet using tunneling services.

### Option 1: Using Cloudflare Tunnel (Recommended - Free)

1. **Install Cloudflare Tunnel:**
   ```bash
   # On Mac with Homebrew
   brew install cloudflare/cloudflare/cloudflared

   # On Windows
   # Download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation

   # On Linux
   wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
   sudo dpkg -i cloudflared-linux-amd64.deb
   ```

2. **Start your dev server:**
   ```bash
   npm run dev
   ```

3. **Create tunnel (in a new terminal):**
   ```bash
   cloudflared tunnel --url http://localhost:8080
   ```

4. **Share the URL:**
   You'll receive a public URL like `https://random-name.trycloudflare.com` that you can share with anyone.

### Option 2: Using ngrok (Free tier available)

1. **Install ngrok:**
   - Sign up at https://ngrok.com
   - Download and install ngrok for your OS
   - Authenticate: `ngrok config add-authtoken YOUR_AUTH_TOKEN`

2. **Start your dev server:**
   ```bash
   npm run dev
   ```

3. **Start ngrok tunnel (in a new terminal):**
   ```bash
   ngrok http 8080
   ```

4. **Share the URL:**
   You'll receive a public URL like `https://xxxx-xx-xx-xx-xx.ngrok-free.app`

### Option 3: Using localtunnel (Free, no signup)

1. **Install localtunnel:**
   ```bash
   npm install -g localtunnel
   ```

2. **Start your dev server:**
   ```bash
   npm run dev
   ```

3. **Start tunnel (in a new terminal):**
   ```bash
   lt --port 8080
   ```

4. **Share the URL:**
   You'll receive a public URL that you can share.

---

## Production Deployment

Deploy your website to production for permanent public access.

### Option 1: Deploy to Vercel (Recommended)

**Via Vercel CLI:**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

**Via Vercel Dashboard:**

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `mikrogreenz-website` repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy to Netlify

**Via Netlify CLI:**

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

**Via Netlify Dashboard:**

1. Visit [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

Your site will be live at `https://your-project.netlify.app`

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** (add homepage and deploy scripts):
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/mikrogreenz-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts** (set base path):
   ```typescript
   export default defineConfig({
     base: '/mikrogreenz-website/',
     // ... rest of config
   });
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

Your site will be live at `https://YOUR_USERNAME.github.io/mikrogreenz-website`

---

## GitHub Codespaces

Access your development environment from anywhere with a browser.

1. **Navigate to your repository** on GitHub
2. **Click the "Code" button** (green)
3. **Select "Codespaces" tab**
4. **Click "Create codespace on main"**
5. Wait for the environment to load
6. **Run the dev server:**
   ```bash
   npm install
   npm run dev
   ```
7. **Access via forwarded port:**
   - Codespaces will automatically forward port 8080
   - Click the "Ports" tab and open the forwarded URL
   - You can make the port public to share with others

---

## Security Considerations

- **Development servers** (npm run dev) are NOT secure for production use
- Always use **production builds** (npm run build) for public deployment
- Keep your `.env` file **private** - never commit sensitive keys
- Use **environment variables** for production deployments
- Review the **Supabase keys** in `.env` - ensure you're using appropriate security rules

---

## Troubleshooting

### Cannot access via local network
- Check firewall settings
- Verify you're using the correct IP address
- Ensure both devices are on the same network
- Try disabling VPN on either device

### Tunnel URL not working
- Ensure dev server is running on port 8080
- Check tunnel service status
- Try a different tunneling service

### Build fails on deployment
- Run `npm run build` locally first
- Check build logs for errors
- Ensure all environment variables are set on the platform
- Verify Node.js version compatibility

### HMR (Hot Module Replacement) not working remotely
- This is expected for tunneled connections
- Manual page refresh may be needed
- For local network access, HMR should work

---

## Quick Reference

| Method | Speed | Setup | Persistence | Best For |
|--------|-------|-------|-------------|----------|
| Local Network | Fast | Easy | Temporary | Testing on devices |
| Cloudflare Tunnel | Fast | Easy | Temporary | Quick sharing |
| ngrok | Fast | Medium | Temporary | Demo/testing |
| Vercel | Fast | Easy | Permanent | Production |
| Netlify | Fast | Easy | Permanent | Production |
| GitHub Pages | Medium | Medium | Permanent | Static hosting |
| Codespaces | Medium | Easy | Temporary | Cloud development |

---

## Need Help?

- Check the [main README.md](./README.md) for project setup
- Visit [Vite documentation](https://vitejs.dev/)
- For deployment issues, consult platform-specific docs:
  - [Vercel Docs](https://vercel.com/docs)
  - [Netlify Docs](https://docs.netlify.com)
  - [GitHub Pages](https://pages.github.com/)
