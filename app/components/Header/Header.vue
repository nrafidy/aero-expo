<template>
  <nav
    class="shadow-md fixed w-full z-50 top-0 left-0 text-neutral-50 bg-primary-950 hidden lg:block"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left: Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="flex items-center space-x-2">
            <img class="h-8" src="/logo.png" alt="Logo" />
            <!-- <span class="text-xl font-semibold font-tangerine">Aero Expo</span> -->
          </a>
        </div>

        <!-- Center: Navigation Links -->
        <div class="hidden md:flex space-x-6">
          <BaseNavItem to="/" :text="$t('header.home')" />
          <BaseNavItem to="/#about" :text="$t('header.about')" />
          <BaseNavItem to="/#activities" :text="$t('header.activities')" />
          <BaseNavItem to="/#exhibitors" :text="$t('header.exhibitors')" />
          <BaseNavItem to="/#good-to-know" :text="$t('header.good-to-know')" />
          <BaseNavItem
            to="/#partners-and-sponsors"
            :text="$t('header.partners')"
          />
          <!-- <BaseNavItem to="/#contact" :text="$t('header.contact')" /> -->
        </div>

        <!-- Right: Extra Button/Text -->
        <div class="hidden md:flex items-center justify-center space-x-12">
          <UButton
            icon="famicons:ticket-sharp"
            size="md"
            color="primary"
            variant="solid"
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
