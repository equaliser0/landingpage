export default {
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwindcss-hero-patterns')
  ],

  daisyui: {
    // misc: https://tailcolor.com/
    // Colors: https://colorgen.dev/
    // Shades: https://tailwind-color-palette.netlify.app/
    themes: [
      {
        light: {
          "color-scheme": "light",
          "primary": "#FB2B68",
          "secondary": "#002448",
          "accent": "#D7263D",
          "neutral": "#2B322B",
          "base-100": "#FBFEFB",
          "base-200": "#F3FDF3",
          "base-300": "#E6FBE6",
          "base-content": "#151915",
          "info": "#224758",
          "success": "#C6ECAE",
          "warning": "#F6AA1C",
          "error": "#590004",
        },
      },
      {
        dark: {
          "color-scheme": "dark",
          "primary": "#FB2B68",
          "secondary": "#002448",
          "accent": "#D7263D",
          "neutral": "##FBFEFB",
          "base-100": "#404A40",
          "base-200": "#2B322B",
          "base-300": "#151915",
          "base-content": "##F7FEF7",
          "info": "#224758",
          "success": "#C6ECAE",
          "warning": "#F6AA1C",
          "error": "#590004",
        },
      },
    ],
  }
}
