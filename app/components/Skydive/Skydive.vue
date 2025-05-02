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

            <form @submit.prevent="handleSubmit" class="space-y-4 space-x-4">
              <UInput
                v-model="form.name"
                icon="material-symbols:person-outline"
                :placeholder="$t('booking.name_placeholder')"
                required
              />

              <UInput
                v-model="form.email"
                icon="material-symbols:mail-outline"
                type="email"
                :placeholder="$t('booking.email_placeholder')"
                required
              />

              <UInput
                v-model="form.phone"
                icon="material-symbols:call-outline"
                type="tel"
                :placeholder="$t('booking.phone_placeholder')"
                required
              />

              <UInput
                v-model="form.count"
                icon="heroicons:user-group"
                type="number"
                :placeholder="$t('booking.count_placeholder')"
                required
              />

              <div class="pt-2">
                <UButton
                  type="submit"
                  color="secondary"
                  size="lg"
                  class="w-full justify-center"
                  :loading="isSubmitting"
                >
                  {{ $t("booking.cta") }}
                  <template #trailing>
                    <Icon name="material-symbols:arrow-forward" />
                  </template>
                </UButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Trust Badges -->
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
  name: "",
  email: "",
  phone: "",
  jumpType: null,
});

const isSubmitting = ref(false);

const jumpTypes = [
  { value: "tandem", label: t("booking.jump_types.tandem") },
  { value: "solo", label: t("booking.jump_types.solo") },
  { value: "group", label: t("booking.jump_types.group") },
];

const trustBadges = [
  {
    icon: "material-symbols:verified-outline",
    text: t("booking.badges.verified"),
  },
  { icon: "material-symbols:lock-outline", text: t("booking.badges.secure") },
  { icon: "material-symbols:star-outline", text: t("booking.badges.rated") },
];

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    // Handle form submission
    // await $fetch("/api/booking", {
    //   method: "POST",
    //   body: form,
    // });
    // Show success message
    useToast().add({
      title: t("booking.success_title"),
      description: t("booking.success_message"),
      icon: "material-symbols:check-circle-outline",
    });
  } catch (error) {
    // Show error message
    useToast().add({
      title: t("booking.error_title"),
      description: t("booking.error_message"),
      color: "red",
    });
  } finally {
    isSubmitting.value = false;
  }
};
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
