import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://lautarozanzot.github.io/ContenedoresMG.github.io/",
  plugins: [react()],
})
