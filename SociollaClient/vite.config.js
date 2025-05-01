import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5050,
    proxy: {
      '/store': 'http://localhost:5000',
      '/user': 'http://localhost:5000',
      '/item': 'http://localhost:5000',
      '/transaction': 'http://localhost:5000',
    },
  },
})
