<template>
  <footer class="text-center text-sm py-2">
    <div
      class="flex flex-col md:flex-row container justify-evenly mx-auto py-12 space-y-6"
    >
      <div class="flex flex-col items-center md:items-start space-y-6">
        <img class="w-32" src="/logo.png" alt="aero expo" />
        <span>L'aéronautique à votre portée.</span>
      </div>
      <div class="flex flex-col space-y-6">
        <strong class="text-xl">Contacts</strong>
        <div class="flex flex-col space-x-2">
          <span>+261 34 15 760 34</span>
          <span>+261 34 28 686 76</span>
        </div>
      </div>
      <div class="flex flex-col space-y-6">
        <strong class="text-xl">Nos réseaux sociaux</strong>
        <div class="flex justify-center space-x-2">
          <UIcon name="logos:facebook" class="size-6" />
          <UIcon name="skill-icons:instagram" class="size-6" />
          <UIcon name="devicon:linkedin" class="size-6" />
          <UIcon name="fa6-brands:x-twitter" class="size-6" />
          <UIcon name="logos:youtube-icon" class="size-6" />
        </div>
      </div>
    </div>
    &copy; Aero expo 2025. All rights reserved.
  </footer>
</template>
