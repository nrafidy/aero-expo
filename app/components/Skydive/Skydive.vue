<template>
  <section
    id="booking"
    class="py-16 bg-gradient-to-b from-primary-900 to-primary-950"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white mb-4">
          {{ $t("booking.title") }}
        </h2>
        <p class="text-xl text-primary-200 max-w-3xl mx-auto">
          {{ $t("booking.subtitle") }}
        </p>
      </div>

      <!-- Price Reduction Card -->
      <div
        class="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
      >
        <div class="md:flex">
          <!-- Visual Side -->
          <div
            class="md:w-2/5 bg-primary-800 p-8 flex items-center justify-center"
          >
            <div class="text-center">
              <div class="text-5xl font-bold text-white mb-2">-30%</div>
              <div class="text-white uppercase tracking-wider font-semibold">
                {{ $t("booking.discount") }}
              </div>
              <Icon
                name="material-symbols:paragliding-rounded"
                class="w-16 h-16 text-secondary-400 mt-6 mx-auto"
              />
            </div>
          </div>

          <!-- Form Side -->
          <div class="md:w-3/5 p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              {{ $t("booking.form_title") }}
            </h3>

            <UForm class="">
              <div class="flex flex-col space-y-2">
                <div class="flex space-x-4">
                  <UFormField required>
                    <UInput
                      v-model="form.groupName"
                      icon="material-symbols:person-outline"
                      :placeholder="$t('booking.modal.placeholders.name')"
                      required
                    />
                  </UFormField>

                  <UFormField required>
                    <UInput
                      v-model="form.groupEmail"
                      icon="material-symbols:mail-outline"
                      type="email"
                      :placeholder="$t('booking.modal.placeholders.email')"
                    />
                  </UFormField>
                </div>

                <div class="flex space-x-4">
                  <UFormField required>
                    <UInput
                      v-model="form.groupPhone"
                      icon="material-symbols:call-outline"
                      type="tel"
                      :placeholder="$t('booking.modal.placeholders.phone')"
                    />
                  </UFormField>

                  <UFormField required>
                    <UInput
                      v-model="form.groupCount"
                      icon="heroicons:user-group"
                      type="number"
                      :placeholder="$t('booking.modal.placeholders.count')"
                    />
                  </UFormField>
                </div>
              </div>

              <div class="pt-2">
                <SkydiveRegister
                  :group="form"
                  :disabled="
                    !(
                      form.groupName &&
                      form.groupEmail &&
                      form.groupPhone &&
                      form.groupCount
                    )
                  "
                />
              </div>
            </UForm>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-8 mt-12">
        <div
          v-for="badge in trustBadges"
          :key="badge.text"
          class="flex items-center gap-2"
        >
          <Icon :name="badge.icon" class="w-6 h-6 text-secondary-400" />
          <span class="text-white">{{ badge.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

// Form handling
const form = reactive({
  groupName: "",
  groupEmail: "",
  groupPhone: "",
  groupCount: 1,
});

const trustBadges = [
  {
    icon: "material-symbols:verified-outline",
    text: t("booking.badges.verified"),
  },
  { icon: "material-symbols:lock-outline", text: t("booking.badges.secure") },
  { icon: "material-symbols:star-outline", text: t("booking.badges.rated") },
];
</script>

<style scoped>
/* Smooth gradient transition */
.bg-gradient-to-b {
  background-size: 100% 200%;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
