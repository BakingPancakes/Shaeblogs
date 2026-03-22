import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";

const serverURL = new URL(process.env.DEV_SERVER_URL ?? "http://localhost:3001");
const serverAPIPath = process.env.DEV_SERVER_API_PATH ?? "/api";

// https://vite.dev/config/
export default defineConfig({
  envDir: "./",
  // Set global variable for Node.js server API
  define: {
    __API_PATH__: JSON.stringify(serverAPIPath),
  },
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Proxy api requests from dev server to node server
      // http://localhost:5173/api -> http://localhost:3001/api
      [serverAPIPath]: serverURL.origin,
    },
  },
});
