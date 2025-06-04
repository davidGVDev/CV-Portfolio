import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  // Configuración para GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/CV-portfolio-app/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
