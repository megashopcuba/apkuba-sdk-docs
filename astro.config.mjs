import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

export default defineConfig({
  site: "https://megashopcuba.github.io",
  base: '/apkuba-sdk-docs',
  outDir: "dist",
  publicDir: "public",
  srcDir: "src",
  integrations: [
    starlight({
      title: "ApKuba SDK",
      logo: {
        src: "./src/assets/logo.webp",
        replacesTitle: true,
      },
    
      description:
        "Librería Android para verificar compras y licencias en Apklis y ApKuba",
      defaultLocale: "es",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/megashopcuba/apkuba-sdk",
        },
      ],
      plugins: [
        starlightThemeNova({
          nav: [
            {
              label: "GitHub",
              href: "https://github.com/megashopcuba/apkuba-sdk",
            },
            { label: "Telegram", href: "https://t.me/apkuba" },
          ],
        }),
      ],
      components: {
        Pagination: "./src/components/CustomPagination.astro",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Inicio",
          link: "/",
        },
        {
          label: "Instalación",
          link: "/instalacion",
        },
        {
          label: "Inicio Rápido",
          link: "/inicio-rapido",
        },
        {
          label: "Core",
          items: [
            {
              label: "ApKuba",
              link: "/core/apkuba",
            },
            {
              label: "Apklis",
              link: "/core/apklis",
            },
          ],
        },
        {
          label: "Modelos",
          items: [
            {
              label: "ApklisResponse",
              link: "/modelos/apklis-response",
            },
            {
              label: "Estados",
              link: "/modelos/estados",
            },
          ],
        },
        {
          label: "Utilidades",
          items: [
            {
              label: "Validación",
              link: "/utilidades/validacion",
            },
            {
              label: "Navegación",
              link: "/utilidades/navegacion",
            },
            {
              label: "Estado de apps",
              link: "/utilidades/aplicaciones",
            },
          ],
        },
      ],
    }),
  ],
});
