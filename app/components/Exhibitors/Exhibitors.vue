<template>
  <section id="exhibitors" class="py-12 px-6 bg-neutral-50">
    <h2 class="text-3xl font-bold text-center text-primary-950 mb-18">
      Nos Exposants
    </h2>
    <!-- <h2 class="text-3xl font-bold text-center mb-8 text-primary-950">
      Our Exhibitors
    </h2> -->
    <div class="max-w-7xl flex flex-wrap gap-12 justify-center mx-auto">
      <img
        v-for="(logo, index) in exhibitorLogos"
        :key="index"
        :src="logo.src"
        :alt="logo.alt"
        class="h-16 w-36 object-contain grayscale"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const exhibitorLogos = [
  { src: "/exhibitors/1.png", alt: "Air Madagascar" },
  { src: "/exhibitors/2.png", alt: "Thales Group" },
  { src: "/exhibitors/3.png", alt: "Dassault Rafale" },
  { src: "/exhibitors/4.png", alt: "Boeing" },
  { src: "/exhibitors/5.png", alt: "Airbus" },
  { src: "/exhibitors/2.png", alt: "Thales Group" },
  { src: "/exhibitors/3.png", alt: "Dassault Rafale" },
  { src: "/exhibitors/4.png", alt: "Boeing" },
  { src: "/exhibitors/5.png", alt: "Airbus" },
  // Add more as needed
];
</script>

<style></style>
