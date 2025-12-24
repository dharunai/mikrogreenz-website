import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Bind to all network interfaces (allows remote access)
    port: 8080,
    strictPort: false, // Automatically try next port if 8080 is busy
    cors: true, // Enable CORS for remote access
    hmr: {
      clientPort: 8080, // Use same port for HMR
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    host: "::", // Also bind preview server to all interfaces
    port: 4173,
    strictPort: false,
    cors: true,
  },
}));
