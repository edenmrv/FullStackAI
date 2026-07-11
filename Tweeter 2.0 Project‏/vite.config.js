import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// relative base so it works on github pages under any repo path
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000
  }
})
