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
    <div data-aos="fade-up" class="max-w-7xl mx-auto mb-16">
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

    <!-- Media Partners -->
    <div data-aos="fade-up" class="max-w-7xl mx-auto mb-16">
      <h3 class="text-2xl font-bold text-center mb-8 uppercase">
        {{ partner_logo.media.title }}
      </h3>
      <div class="flex flex-wrap gap-12 justify-center">
        <ULink
          v-for="(logo, index) in partner_logo.media.data"
          :key="'media-' + index"
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

    <!-- Drink Partners -->
    <div data-aos="fade-up" class="max-w-7xl mx-auto mb-16">
      <h3 class="text-2xl font-bold text-center mb-8 uppercase">
        {{ partner_logo.drink.title }}
      </h3>
      <div class="flex flex-wrap gap-12 justify-center">
        <ULink
          v-for="(logo, index) in partner_logo.drink.data"
          :key="'drink-' + index"
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

    <!-- Lounge Partners -->
    <div data-aos="fade-up" class="max-w-7xl mx-auto mb-16">
      <h3 class="text-2xl font-bold text-center mb-8 uppercase">
        {{ partner_logo.lounge.title }}
      </h3>
      <div class="flex flex-wrap gap-12 justify-center">
        <ULink
          v-for="(logo, index) in partner_logo.lounge.data"
          :key="'lounge-' + index"
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
        src: `/partners/mfa.jpeg`,
        alt: "MFA",
        link: "https://foloalindahy.mg/",
      },
      {
        src: `/partners/min_tourisme.jpeg`,
        alt: "Ministere du tourisme",
        link: "https://www.mta.gov.mg/",
      },
      {
        src: `/partners/min_transport.jpeg`,
        alt: "Ministere du transport",
        link: "https://web.facebook.com/MinTransports/",
      },
      {
        src: `/partners/tafika_anabakabaka.png`,
        alt: "Tafika anabakabaka",
        link: "https://web.facebook.com/tafika.anabakabaka.mg",
      },
    ],
  },
  official: {
    title: $t("partners.official"),
    data: [
      {
        src: `/partners/yas.svg`,
        alt: "yas",
        link: "https://www.yas.mg",
      },
      {
        src: `/partners/ethiopian_airlines.png`,
        alt: "ethiopian airlines",
        link: "https://www.ethiopianairlines.com",
      },
      {
        src: `/partners/totalenergies.webp`,
        alt: "total energies",
        link: "https://totalenergies.com/",
      },
      {
        src: `/partners/acm.png`,
        alt: "ACM",
        link: "https://www.acm.mg/",
      },
      {
        src: `/partners/amarante.png`,
        alt: "Amarante",
        link: "https://www.amarante.com/",
      },
      {
        src: `/partners/unfpa.png`,
        alt: "UNFPA",
        link: "https://www.unfpa.org/",
      },
      {
        src: `/partners/bni.png`,
        alt: "BNI",
        link: "https://www.bni.mg/",
      },
      {
        src: `/partners/ny_havana.png`,
        alt: "Ny Havana",
        link: "https://web.facebook.com/assurancenyhavana/",
      },
      {
        src: `/partners/manda_seafood.jpg`,
        alt: "Manda Seafood",
        link: "https://web.facebook.com/mandaseafood",
      },
    ],
  },
  platinum: {
    title: $t("partners.platinum"),
    data: [
      {
        src: `/partners/scofield_travel.jpg`,
        alt: "Scofield Travel",
        link: "https://web.facebook.com/ScofieldTravel",
      },
      {
        src: `/partners/wfp.jpg`,
        alt: "WFP",
        link: "https://www.wfp.org/",
      },
      {
        src: `/partners/mgh.jpg`,
        alt: "MGH",
        link: "https://www.mg-handling.com/",
      },
      {
        src: `/partners/eneam.png`,
        alt: "ENEAM",
        link: "https://eneam.mg/",
      },
      {
        src: `/partners/jda.png`,
        alt: "JDA",
        link: "https://jdaecole.mg/",
      },
      {
        src: `/partners/ravinala.webp`,
        alt: "ravinala",
        link: "https://www.ravinala-airports.aero/en/",
      },
    ],
  },
  partners: {
    title: $t("partners.partners"),
    data: [
      {
        src: `/partners/makiplast.png`,
        alt: "Makiplast",
        link: "https://www.makiplast.mg/",
      },

      {
        src: `/partners/fila.png`,
        alt: "Fi.La. Group",
        link: "https://studio.fila-group.mg/",
      },
      {
        src: `/partners/light_box.png`,
        alt: "Light box",
        link: "https://www.lightbox.mg/",
      },
      {
        src: `/partners/okalou.webp`,
        alt: "Okalou",
        link: "https://okalou.mg/",
      },
      {
        src: `/partners/skydive.jpeg`,
        alt: "Skydive",
        link: "https://www.skydive-madagascar.com/",
      },
      {
        src: `/partners/rho.jpeg`,
        alt: "Rho Plane Kely Shop",
        link: "https://web.facebook.com/profile.php?id=61564532325867",
      },
      {
        src: `/partners/asecna.png`,
        alt: "Asecna",
        link: "https://www.asecna.aero/index.php/fr/",
      },
    ],
  },
  media: {
    title: $t("partners.media"),
    data: [
      {
        src: `/partners/tvm.png`,
        alt: "TVM",
        link: "https://web.facebook.com/tvm.malagasy.officiel",
      },
      {
        src: `/partners/real_tv.png`,
        alt: "Real TV",
        link: "https://www.realtvfm.com/",
      },
      {
        src: `/partners/viva.webp`,
        alt: "Viva",
        link: "https://web.facebook.com/Vivatv.mg",
      },
      {
        src: `/partners/rdj.jpg`,
        alt: "RDJ",
        link: "https://rdj.mg",
      },
    ],
  },
  drink: {
    title: $t("partners.drink"),
    data: [
      {
        src: `/partners/xxl.png`,
        alt: "Star",
        link: "https://www.star.mg/produits/energy-drinks/xxl-energy-cest-petit-cest-puissant",
      },
    ],
  },
  lounge: {
    title: $t("partners.lounge"),
    data: [
      {
        src: `/partners/balancoire.jpg`,
        alt: "Balancoire",
        link: "https://web.facebook.com/LaBalancoire.mg/",
      },
    ],
  },
};
</script>

<style></style>
