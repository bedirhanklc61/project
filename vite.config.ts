// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project/', // dikkat: repo adı neyse buraya onu yaz (şu an project görünüyor)
  plugins: [react()],
})
