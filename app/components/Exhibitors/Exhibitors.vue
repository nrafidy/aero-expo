<template>
  <section id="exhibitors" class="py-12 px-6 bg-neutral-50">
    <h2 class="text-3xl font-bold text-center text-primary-950 mb-18">
      {{ $t("exhibitors.title") }}
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
const base = useRuntimeConfig().app.baseURL;

const exhibitorLogos = [
  { src: `${base}/exhibitors/1.png`, alt: "Air Madagascar" },
  { src: `${base}/exhibitors/2.png`, alt: "Thales Group" },
  { src: `${base}/exhibitors/3.png`, alt: "Dassault Rafale" },
  { src: `${base}/exhibitors/4.png`, alt: "Boeing" },
  { src: `${base}/exhibitors/5.png`, alt: "Airbus" },
  { src: `${base}/exhibitors/2.png`, alt: "Thales Group" },
  { src: `${base}/exhibitors/3.png`, alt: "Dassault Rafale" },
  { src: `${base}/exhibitors/4.png`, alt: "Boeing" },
  { src: `${base}/exhibitors/5.png`, alt: "Airbus" },
];
</script>

<style></style>
