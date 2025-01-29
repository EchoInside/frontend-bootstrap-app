import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Potrzebne do symulacji DOM w testach
    globals: true, // Włącza globalne metody jak `describe`, `it`, `expect`
  },
});
