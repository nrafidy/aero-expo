<template>
  <footer class="text-center text-sm py-2 text-neutral-50 bg-primary-950">
    <div
      class="flex flex-col md:flex-row container justify-evenly mx-auto py-12 space-y-6"
    >
      <div class="flex flex-col items-center md:items-start space-y-6">
        <img class="w-32" src="/logo.png" alt="aero expo" />
        <span>{{ $t("footer.slogan") }}</span>
      </div>
      <div class="flex flex-col space-y-6">
        <strong class="text-xl">Contacts</strong>
        <div class="flex flex-col">
          <span>+261 34 15 760 34</span>
          <span>+261 34 28 686 76</span>
          <span>contact@aero-expo.mg</span>
        </div>
      </div>
      <div class="flex flex-col space-y-6">
        <strong class="text-xl">{{ $t("footer.social-media") }}</strong>
        <div class="flex justify-center space-x-2">
          <ULink
            key="footer-fb"
            to="https://web.facebook.com/profile.php?id=61575252123938"
            target="_blank"
            class="flex items-center space-x-2 text-neutral-50 hover:text-primary-950 transition-colors"
          >
            <UIcon name="logos:facebook" class="size-6" />
            <span class="text-white">Facebook</span>
          </ULink>

          <!-- <UIcon name="skill-icons:instagram" class="size-6" />
          <UIcon name="devicon:linkedin" class="size-6" />
          <UIcon name="fa6-brands:x-twitter" class="size-6" />
          <UIcon name="logos:youtube-icon" class="size-6" /> -->
        </div>
      </div>
    </div>
    <div>&copy; Aero expo 2025. {{ $t("footer.copyright") }}</div>
    <div class="italic mt-2">{{ $t("footer.flg") }}</div>
  </footer>
</template>
