<template>
  <section id="partners-and-sponsors" class="py-12 bg-neutral-50">
    <h2 class="text-3xl font-bold text-center text-primary-950 mb-18">
      {{ $t("partners.title") }}
    </h2>

    <!-- Institutions -->
    <div data-aos="fade-up" class="max-w-7xl mx-auto mb-16">
      <h3 class="text-2xl font-bold text-center mb-8 uppercase">
        {{ partner_logo.institution.title }}
      </h3>
      <div class="flex flex-wrap gap-12 justify-center">
        <ULink
          v-for="(logo, index) in partner_logo.institution.data"
          :key="'institution-' + index"
          :to="logo.link"
          target="_blank"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-16 w-36 object-contain grayscale hover:grayscale-0 transition-all"
          />
        </ULink>
      </div>
    </div>

    <!-- Official Sponsors -->
    <div data-aos="fade-up" class="max-w-7xl mx-auto mb-16">
      <h3 class="text-2xl font-bold text-center mb-8 uppercase">
        {{ partner_logo.official.title }}
      </h3>
      <div class="flex flex-wrap gap-12 justify-center">
        <ULink
          v-for="(logo, index) in partner_logo.official.data"
          :key="'official-' + index"
          :to="logo.link"
          target="_blank"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-16 w-36 object-contain grayscale hover:grayscale-0 transition-all"
          />
        </ULink>
      </div>
    </div>

    <!-- Platinum Sponsors -->
    <div data-aos="fade-up" class="max-w-7xl mx-auto mb-16">
      <h3 class="text-2xl font-bold text-center mb-8 uppercase">
        {{ partner_logo.platinum.title }}
      </h3>
      <div class="flex flex-wrap gap-12 justify-center">
        <ULink
          v-for="(logo, index) in partner_logo.platinum.data"
          :key="'platinum-' + index"
          :to="logo.link"
          target="_blank"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-16 w-36 object-contain grayscale hover:grayscale-0 transition-all"
          />
        </ULink>
      </div>
    </div>

    <!-- Partners -->
    <div data-aos="fade-up" class="max-w-7xl mx-auto">
      <h3 class="text-2xl font-bold text-center mb-8 uppercase">
        {{ partner_logo.partners.title }}
      </h3>
      <div class="flex flex-wrap gap-12 justify-center">
        <ULink
          v-for="(logo, index) in partner_logo.partners.data"
          :key="'partners-' + index"
          :to="logo.link"
          target="_blank"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-16 w-36 object-contain grayscale hover:grayscale-0 transition-all"
          />
        </ULink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const base = useRuntimeConfig().app.baseURL;

const { t: $t } = useI18n();

const partner_logo = {
  institution: {
    title: $t("partners.institution"),
    data: [
      {
        src: `${base}/partners/mfa.jpeg`,
        alt: "MFA",
        link: "https://foloalindahy.mg/",
      },
      {
        src: `${base}/partners/min_tourisme.jpeg`,
        alt: "Ministere du tourisme",
        link: "https://www.mta.gov.mg/",
      },
      {
        src: `${base}/partners/min_transport.jpeg`,
        alt: "Ministere du transport",
        link: "https://web.facebook.com/MinTransports/",
      },
      {
        src: `${base}/partners/tafika_anabakabaka.png`,
        alt: "Tafika anabakabaka",
        link: "https://web.facebook.com/tafika.anabakabaka.mg",
      },
    ],
  },
  official: {
    title: $t("partners.official"),
    data: [
      {
        src: `${base}/partners/yas.svg`,
        alt: "yas",
        link: "https://www.yas.mg",
      },
      {
        src: `${base}/partners/ethiopian_airlines.png`,
        alt: "ethiopian airlines",
        link: "https://www.ethiopianairlines.com",
      },
      {
        src: `${base}/partners/totalenergies.webp`,
        alt: "total energies",
        link: "https://totalenergies.com/",
      },
      {
        src: `${base}/partners/acm.png`,
        alt: "ACM",
        link: "https://www.acm.mg/",
      },
      {
        src: `${base}/partners/amarante.png`,
        alt: "Amarante",
        link: "https://www.amarante.com/",
      },
      {
        src: `${base}/partners/unfpa.png`,
        alt: "UNFPA",
        link: "https://www.unfpa.org/",
      },
      {
        src: `${base}/partners/bni.png`,
        alt: "BNI",
        link: "https://www.bni.mg/",
      },
      {
        src: `${base}/partners/ny_havana.png`,
        alt: "Ny Havana",
        link: "https://web.facebook.com/assurancenyhavana/",
      },
    ],
  },
  platinum: {
    title: $t("partners.platinum"),
    data: [
      {
        src: `${base}/partners/scofield_travel.jpg`,
        alt: "Scofield Travel",
        link: "https://web.facebook.com/ScofieldTravel",
      },
      {
        src: `${base}/partners/wfp.jpg`,
        alt: "WFP",
        link: "https://www.wfp.org/",
      },
      {
        src: `${base}/partners/mgh.jpg`,
        alt: "MGH",
        link: "https://www.mg-handling.com/",
      },
      {
        src: `${base}/partners/cafe_musee.png`,
        alt: "Cafe du musee",
        link: "https://cafetana.mg/",
      },
      {
        src: `${base}/partners/eneam.png`,
        alt: "ENEAM",
        link: "https://eneam.mg/",
      },
      {
        src: `${base}/partners/jda.png`,
        alt: "JDA",
        link: "https://jdaecole.mg/",
      },
    ],
  },
  partners: {
    title: $t("partners.partners"),
    data: [
      {
        src: `${base}/partners/makiplast.png`,
        alt: "Makiplast",
        link: "https://www.makiplast.mg/",
      },
      {
        src: `${base}/partners/manda_seafood.jpg`,
        alt: "Manda Seafood",
        link: "https://web.facebook.com/mandaseafood",
      },
      { src: `${base}/partners/fila.png`, alt: "Fi.La. Group", link: "" },
      {
        src: `${base}/partners/light_box.png`,
        alt: "Light box",
        link: "https://www.lightbox.mg/",
      },
      {
        src: `${base}/partners/okalou.webp`,
        alt: "Okalou",
        link: "https://okalou.mg/",
      },
      {
        src: `${base}/partners/skydive.jpeg`,
        alt: "Skydive",
        link: "https://www.skydive-madagascar.com/",
      },
      {
        src: `${base}/partners/real_tv.png`,
        alt: "Real TV",
        link: "https://www.realtvfm.com/",
      },
      {
        src: `${base}/partners/viva.webp`,
        alt: "Viva",
        link: "https://web.facebook.com/Vivatv.mg",
      },
    ],
  },
  drink: {
    title: $t("partners.drink"),
    data: [
      {
        src: `${base}/partners/star.png`,
        alt: "Star",
        link: "https://www.star.mg/",
      },
    ],
  },
};
</script>

<style></style>
