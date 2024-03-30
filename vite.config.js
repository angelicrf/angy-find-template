import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/angy-find-template/"
      : "/" && process.env.VITE_API_KEY,
  plugins: [react()],
  build: {
    define: {
      "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
    },
  },
});
