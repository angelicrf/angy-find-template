import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/your-repo-name/" // Replace 'your-repo-name' with your actual repository name
      : "/",
  plugins: [react()],
});
