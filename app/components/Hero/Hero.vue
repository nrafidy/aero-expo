<template>
  <header class="relative text-center h-full flex flex-col md:flex-row">
    <div
      class="z-10 flex flex-col items-start justify-center p-6 md:px-10 space-y-4 md:max-w-2/5 bg-neutral-50 text-primary-950"
    >
      <p class="text-3xl text-start">
        Vivez toute l’émotion de l’aéronautique.
      </p>
      <p class="text-7xl font-pt font-bold text-start">AERO - EXPO 2025</p>
      <p class="text-justify">
        Le plus grand rendez-vous aéronautique de l’année à Madagascar !
        Rejoignez-nous pour célébrer les 65 ans de l’Armée Malagasy à travers
        deux journées inoubliables placées sous le signe du vol, de l’innovation
        et de l’excellence. Rencontrez des pilotes, découvrez des aéronefs
        fascinants et partagez votre passion avec des visiteurs venus des quatre
        coins du pays… et d’ailleurs. Une expérience à ne surtout pas manquer !
      </p>
      <!-- <p class="text-3xl text-start">Experience the thrill of aviation.</p>
      <p class="text-7xl font-pt font-bold text-start">AERO - EXPO 2025</p>
      <p class="text-justify">
        Madagascar’s biggest aviation event is here! Celebrate the 65th
        anniversary of the Malagasy Armed Forces with two unforgettable days of
        flight, innovation, and aeronautical excellence. Meet pilots, explore
        cutting-edge aircraft, and connect with aviation lovers from across the
        country — and beyond. Don’t miss this high-flying experience!
      </p> -->
    </div>
    <div
      class="relative w-full h-full flex flex-col items-center justify-center space-y-6 bg-hero p-6 md:px-10"
    >
      <!-- <video
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> -->
      <div class="absolute bg-black/60 w-full h-full m-0"></div>
      <div class="relative flex flex-col items-center justify-center space-y-6">
        <img class="w-4xl" src="/logo.png" alt="aero expo" />
        <div
          class="flex flex-col md:flex-row md:items-center lg:items-start space-y-2 items-start space-x-2 font-bold text-white"
        >
          <div class="flex items-center space-x-2">
            <UIcon
              name="material-symbols:calendar-clock-sharp"
              class="size-8"
            />
            <span>31 Mai - 01 Juin 2025</span>
          </div>
          <span class="hidden md:block">|</span>
          <div class="flex items-center space-x-2">
            <UIcon
              name="material-symbols:globe-location-pin-sharp"
              class="size-8"
            />
            <span>Escadron Helicoptère Ivato</span>
          </div>
        </div>
        <UButton
          icon="famicons:ticket-sharp"
          class="text-lg font-bold lg:w-1/4 h-16 justify-center"
          color="secondary"
          variant="solid"
        >
          GET TICKETS
        </UButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.bg-hero {
  /* header { */
  background-image: url("/bg_hero.jpg");
  background-size: cover;
  background-position: top center;
}
.bg-hero::before {
  /* header::before { */
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
</style>
