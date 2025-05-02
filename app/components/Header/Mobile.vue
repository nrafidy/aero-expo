<template>
  <UDrawer
    v-model:open="isMobileMenuOpen"
    direction="right"
    :handle="false"
    :should-scale-background="false"
    class="fixed bottom-0 right-0 m-4 z-50 lg:hidden"
  >
    <UButton
      color="primary"
      variant="solid"
      size="xl"
      trailing-icon="material-symbols:menu"
    />

    <template #content>
      <div class="flex flex-col h-full p-4">
        <!-- Header with Close Button -->
        <div class="flex justify-between items-center mb-6">
          <span class="text-xl font-semibold font-atkinson">Aero-Expo.</span>
          <button @click="isMobileMenuOpen = false" class="p-1">
            <Icon name="material-symbols:close" class="w-6 h-6" />
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="flex-1 flex flex-col space-y-3 overflow-y-auto">
          <UButton
            v-for="item in mobileNavItems"
            :key="item.to"
            :to="item.to"
            variant="ghost"
            color="white"
            class="justify-end"
            @click="isMobileMenuOpen = false"
          >
            <span class="text-left">{{ item.text }}</span>
          </UButton>
        </nav>

        <!-- Footer with CTA and Language Switch -->
        <div class="mt-auto pt-4 border-t border-primary-700 space-y-4">
          <UButton
            icon="material-symbols:paragliding-rounded"
            color="secondary"
            block
            class="font-bold uppercase"
            @click="$router.push('/#booking')"
          >
            {{ $t("header.get-tickets") }}
          </UButton>
          <div class="flex justify-center">
            <BaseLangSwitch />
          </div>
        </div>
      </div>
    </template>
  </UDrawer>
</template>

<script setup>
const { t } = useI18n();
const isMobileMenuOpen = ref(false);

const mobileNavItems = [
  { to: "/", text: t("header.home") },
  { to: "/#about", text: t("header.about") },
  { to: "/#activities", text: t("header.activities") },
  { to: "/#exhibitors", text: t("header.exhibitors") },
  { to: "/#good-to-know", text: t("header.good-to-know") },
  { to: "/#partners-and-sponsors", text: t("header.partners") },
];
</script>

<style>
/* Transition effects */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
