import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vidya-hari-wedding/",
  server: {
    allowedHosts: ["fd76-2407-2640-12-37de-367f-a9c3-7075-7ec5.ngrok-free.app"],
  },
});
