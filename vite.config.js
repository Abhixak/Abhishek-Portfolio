import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/Abhishek-Portfolio/', // Change this to match your GitHub repo name
  server: {
    headers: {
      "Permissions-Policy": "interest-cohort=()"
    }
  }
});
