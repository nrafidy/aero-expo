<template>
  <nav
    class="shadow-md fixed w-full z-50 top-0 left-0 text-neutral-50 bg-primary-950 hidden lg:block"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left: Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="flex items-center space-x-2">
            <img class="h-8 grayscale" src="/logo.png" alt="Logo" />
            <!-- <span class="text-xl font-semibold font-tangerine">Aero Expo</span> -->
          </a>
        </div>

        <!-- Center: Navigation Links -->
        <div class="hidden md:flex space-x-6">
          <BaseNavItem to="/" text="Home" />
          <BaseNavItem to="/#about" text="About" />
          <BaseNavItem to="/#activities" text="Activities" />
          <BaseNavItem to="/#exhibitors" text="Exhibitors" />
          <BaseNavItem to="/#good-to-know" text="Good to know" />
          <BaseNavItem
            to="/#partners-and-sponsors"
            text="Partners & sponsors"
          />
          <!-- <BaseNavItem to="/#contact" text="Contact" /> -->
        </div>

        <!-- Right: Extra Button/Text -->
        <div class="hidden md:block space-x-2">
          <UButton
            icon="famicons:ticket-sharp"
            size="md"
            color="primary"
            variant="solid"
          >
            Get Tickets
          </UButton>
          <!-- <BaseColorSwitch /> -->
        </div>
      </div>
    </div>
  </nav>
</template>
