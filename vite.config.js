import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Potrzebne do symulacji DOM w testach
    globals: true, // Włącza globalne metody jak `describe`, `it`, `expect`
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
});
