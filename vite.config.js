import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vidya-hari-wedding/",
  server: {
    allowedHosts: ["a279-2407-2640-12-76dc-58a1-7c9e-f424-ac13.ngrok-free.app"],
  },
});
