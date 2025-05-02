<template>
  <nav
    class="shadow-md fixed w-full z-50 top-0 left-0 text-neutral-50 bg-primary-950 hidden lg:block"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href="#" class="flex items-center space-x-2">
            <span class="text-xl font-semibold font-atkinson">Aero-Expo.</span>
          </a>
        </div>

        <div
          class="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2"
        >
          <template v-for="(item, index) in navItems" :key="index">
            <BaseNavItem
              v-if="!item.hidden"
              :to="item.to"
              :text="$t(item.translationKey)"
              :active="activeSection === item.to"
            />
          </template>
        </div>

        <div class="hidden md:flex items-center justify-center space-x-12">
          <UButton
            icon="material-symbols:paragliding-rounded"
            size="md"
            color="secondary"
            variant="solid"
            class="font-bold uppercase"
            @click="$router.push('/#booking')"
          >
            {{ $t("header.get-tickets") }}
          </UButton>
          <!-- <BaseColorSwitch /> -->
          <BaseLangSwitch />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { to: "/", translationKey: "header.home", id: "hero" },
  { to: "/#about", translationKey: "header.about", id: "about" },
  { to: "/#activities", translationKey: "header.activities", id: "activities" },
  // { to: "/#skydive", translationKey: "header.skydive", id: "skydive" },
  {
    to: "/#exhibitors",
    translationKey: "header.exhibitors",
    id: "exhibitors",
    hidden: true,
  },
  {
    to: "/#good-to-know",
    translationKey: "header.good-to-know",
    id: "good-to-know",
  },
  {
    to: "/#partners-and-sponsors",
    translationKey: "header.partners",
    id: "partners-and-sponsors",
  },
  {
    to: "/#contact",
    translationKey: "header.contact",
    id: "contact",
    hidden: true,
  },
];

const activeSection = ref("/");

const handleScroll = () => {
  const scrollPosition = window.scrollY + 100;

  // Check home page first
  if (scrollPosition < 300) {
    activeSection.value = "/";
    return;
  }

  // Check other sections
  for (const item of navItems) {
    if (item.hidden || item.to === "/") continue;

    const section = document.getElementById(item.id);
    if (!section) continue;

    const { offsetTop, offsetHeight } = section;
    if (
      scrollPosition >= offsetTop &&
      scrollPosition < offsetTop + offsetHeight
    ) {
      activeSection.value = `${item.to}`;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
