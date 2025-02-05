import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Potrzebne do symulacji DOM w testach
    globals: true, // Włącza globalne metody jak `describe`, `it`, `expect`
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
});
