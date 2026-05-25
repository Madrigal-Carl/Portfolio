import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/layouts": path.resolve(__dirname, "./src/layouts"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
      "@/contexts": path.resolve(__dirname, "./src/contexts"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
