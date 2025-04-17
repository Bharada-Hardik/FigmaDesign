import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
},
 {
  allowedHosts: [
    'e38e-103-107-61-110.ngrok-free.app',  // Add your host here
    // You can add other allowed hosts if necessary
  ]
})
