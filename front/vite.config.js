import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import fs from 'fs'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['d3385a678bed.ngrok-free.app'],
    // https: {
    //   key: fs.readFileSync('./localhost-key.pem'),
    //   cert: fs.readFileSync('./localhost.pem'),
    // },
  }
})
