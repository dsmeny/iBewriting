import path from "path";
import { defineConfig } from "vite";
import backend from "./backend/server.js";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "src"),
  server: {
    proxy: {
      "/api": {
        tgarget: "http://localhost:3002",
        changeOrigin: true,
      },
    },
  },
  middleware: (app) => {
    app.use(backend);
  },
});
