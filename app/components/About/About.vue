<template>
  <section
    id="about"
    class="max-w-7xl py-16 text-justify mx-auto flex-col space-y-24 p-6"
  >
    <div class="flex space-x-6 items-center">
      <div class="flex-1 space-y-6">
        <h2 class="text-3xl font-semibold">{{ $t("about.title1") }}</h2>
        <div class="md:max-w-2xl space-y-6">
          <p>
            <strong>Aéro-Expo 2025</strong> {{ $t("about.description1_p1") }}
          </p>
          <p>
            {{ $t("about.description1_p2") }}
          </p>
        </div>
      </div>
      <div class="hidden md:block md:w-1/3 bg-neutral-50 p-4">
        <img src="/defile.jpg" alt="Icon" class="h-full object-cover" />
      </div>
    </div>
    <div class="flex space-x-6 items-center justify-between">
      <div class="hidden md:block md:w-1/3 bg-neutral-50 p-4">
        <img src="/defile.jpg" alt="Icon" class="h-full object-cover" />
      </div>
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold mb-4">{{ $t("about.title2") }}</h2>
        <div class="max-w-2xl space-y-6">
          <p>
            <strong>{{ $t("about.description2_t1") }}</strong>
            {{ $t("about.description2_p1") }}
          </p>
          <p>
            <strong>{{ $t("about.description2_t2") }}</strong>
            {{ $t("about.description2_p2") }}
          </p>
          <p>
            <strong>{{ $t("about.description2_t3") }}</strong>
            {{ $t("about.description2_p3") }}
          </p>
          <p>
            <strong>{{ $t("about.description2_t4") }}</strong>
            {{ $t("about.description2_p4") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
