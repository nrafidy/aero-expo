<template>
  <section
    id="activities"
    class="py-16 text-center mx-auto bg-neutral-50 text-primary-950"
  >
    <h2 class="text-3xl font-semibold mb-12">{{ $t("activities.title") }}</h2>

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
        :icon="event.icon"
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
    icon: "healthicons:helicopter-24px", // Aircraft exhibit
  },
  {
    title: $t("activities.title2"),
    description: $t("activities.description2"),
    icon: "fluent:airplane-take-off-20-filled", // Air ride / flight experience
  },
  {
    title: $t("activities.title3"),
    description: $t("activities.description3"),
    icon: "i-material-symbols-paragliding-rounded", // Tandem parachute jump
  },
  {
    title: $t("activities.title4"),
    description: $t("activities.description4"),
    icon: "game-icons:jet-fighter", // Aerial demo
  },
  {
    title: $t("activities.title5"),
    description: $t("activities.description5"),
    icon: "i-material-symbols-storefront-outline-rounded", // Exhibition booths
  },
  {
    title: $t("activities.title6"),
    description: $t("activities.description6"),
    icon: "i-material-symbols-music-note-rounded", // Music & cultural shows
  },
  {
    title: $t("activities.title7"),
    description: $t("activities.description7"),
    icon: "i-material-symbols-record-voice-over-rounded", // Conferences
  },
  {
    title: $t("activities.title8"),
    description: $t("activities.description8"),
    icon: "noto:man-pilot-medium-dark-skin-tone", // Meet the pilots
  },
  {
    title: $t("activities.title9"),
    description: $t("activities.description9"),
    icon: "game-icons:delivery-drone", // Drone demonstrations
  },
  {
    title: $t("activities.title10"),
    description: $t("activities.description10"),
    icon: "icon-park-outline:circus", // Kids' play area
  },
];
</script>

<style></style>
