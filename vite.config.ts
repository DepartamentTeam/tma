import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import fs from "fs";


export default defineConfig({
  plugins: [solid()],
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
        host: 'tg-mini-app.local',
        port: 443,
    },
    https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost.pem'),
    },
  },
})
