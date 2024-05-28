import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './env',
  envPrefix: 'REACT_APP_',
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    host: true,
  },

  preview: {
    port: 3000,
    host: true,
    strictPort: true,
    open: true,
  },

  build: {
    outDir: 'build'
  }
})
