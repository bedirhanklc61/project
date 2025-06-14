// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project/',   // repo adın buysa bu tam böyle olmalı
  plugins: [react()],
})
