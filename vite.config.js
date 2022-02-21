import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      workbox: {
        globPatterns: ["assets/**", "index.html", "manifest.webmanifest"],
        runtimeCaching: [
          {
            handler: "NetworkFirst",
            urlPattern: "https://api.sunrise-sunset.org/json",
          },
        ],
      },
      manifest: {
        background_color: "green",
        display: "standalone",
        icons: [
          {
            src: "manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        name: "ProjektSunrise",
        short_name: "Sunrise",
        start_url: ".",
        theme_color: "orange",
      },
      registerType: "autoUpdate",
    }),
    vue(),
  ],
});
