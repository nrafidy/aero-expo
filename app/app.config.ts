export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  toaster: {
    position: "top-right",
    duration: 5000,
    expand: false,
  },
  ui: {
    colors: {
      primary: "blue-zodiac",
      secondary: "neon-carrot",
      // neutral: "slate",
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
  },
});
