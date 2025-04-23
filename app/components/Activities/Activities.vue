<template>
  <section
    id="activities"
    class="py-16 text-center mx-auto bg-neutral-50 text-primary-950"
  >
    <h2 class="text-3xl font-semibold mb-12">À quoi s'attendre</h2>

    <div class="relative space-y-12">
      <!-- Vertical Line -->
      <div
        class="absolute left-16 md:left-1/2 top-0 h-full w-0.5 bg-secondary-100 z-0 transform -translate-x-1/2"
      ></div>

      <!-- Timeline Events -->
      <BaseTimelineEvent
        v-for="(event, index) in eventDetails"
        :key="index"
        :title="event.title"
        :description="event.description"
        :image="event.img"
        :textPosition="index % 2 === 0 ? 'left' : 'right'"
        class="relative z-10"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const base = useRuntimeConfig().app.baseURL;

const { t: $t } = useI18n();

const eventDetails = [
  {
    title: $t("activities.title1"),
    description: $t("activities.description1"),
    img: `${base}/${$t("activities.img1")}`,
  },
  {
    title: $t("activities.title2"),
    description: $t("activities.description2"),
    img: `${base}/${$t("activities.img2")}`,
  },
  {
    title: $t("activities.title3"),
    description: $t("activities.description3"),
    img: `${base}/${$t("activities.img3")}`,
  },
  {
    title: $t("activities.title4"),
    description: $t("activities.description4"),
    img: `${base}/${$t("activities.img4")}`,
  },
  {
    title: $t("activities.title5"),
    description: $t("activities.description5"),
    img: `${base}/${$t("activities.img5")}`,
  },
  {
    title: $t("activities.title6"),
    description: $t("activities.description6"),
    img: `${base}/${$t("activities.img6")}`,
  },
  {
    title: $t("activities.title7"),
    description: $t("activities.description7"),
    img: `${base}/${$t("activities.img7")}`,
  },
  {
    title: $t("activities.title8"),
    description: $t("activities.description8"),
    img: `${base}/${$t("activities.img8")}`,
  },
  {
    title: $t("activities.title9"),
    description: $t("activities.description9"),
    img: `${base}/${$t("activities.img9")}`,
  },
  {
    title: $t("activities.title10"),
    description: $t("activities.description10"),
    img: `${base}/${$t("activities.img10")}`,
  },
];
</script>

<style></style>
