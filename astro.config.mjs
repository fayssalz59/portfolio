import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://portfolio.fayssal-zeggar.com",
  output: "static",
  devToolbar: {
    enabled: false,
  },
  legacy: {
    collectionsBackwardsCompat: true,
  },
  publicDir: "static",
});
