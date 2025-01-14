import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  base: '/repository-name/', // replace 'repository-name' with your actual repo name
  build: {
    outDir: 'dist',
  },
}
