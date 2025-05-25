<template>
  <UModal
    :title="$t('booking.modal.title') + ' ' + group.groupName"
    :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full',
    }"
    class="w-full max-w-2xl"
  >
    <UButton
      color="secondary"
      size="lg"
      class="w-full justify-center"
      :loading="isSubmitting"
      :disabled="disabled"
      @click="isOpen = true"
    >
      {{ $t("booking.cta") }}
      <template #trailing>
        <Icon name="material-symbols:arrow-forward" />
      </template>
    </UButton>

    <template #body>
      <div class="space-y-4">
        <div
          v-for="(member, index) in members"
          :key="index"
          class="flex gap-2 p-2 border border-primary-100 rounded-lg transition-all"
          :class="{
            'border-primary-200 bg-primary-50': index % 2 === 0,
          }"
        >
          <UFormGroup label="Full Name" required>
            <UInput
              v-model="member.name"
              :placeholder="$t('booking.modal.placeholders.name')"
              icon="i-heroicons-user"
            />
          </UFormGroup>

          <UFormGroup :label="'ID Number'" required>
            <UInput
              v-model="member.cin"
              :placeholder="$t('booking.modal.placeholders.id')"
              icon="i-heroicons-identification"
            />
          </UFormGroup>

          <UFormGroup label="Weight" required>
            <UInput
              v-model="member.weight"
              :placeholder="$t('booking.modal.placeholders.weight')"
              icon="material-symbols:weight-outline"
              type="number"
            />
          </UFormGroup>

          <UButton
            color="red"
            variant="ghost"
            icon="i-heroicons-trash"
            :disabled="members.length <= 1"
            @click="removeMember(index)"
            class="flex-shrink-0"
          />
        </div>
        <div class="flex justify-end">
          <UButton
            color="neutral"
            variant="solid"
            icon="i-heroicons-plus"
            @click="addMember"
          />
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex w-full justify-end items-center gap-2">
        <UButton label="Cancel" color="gray" @click="isOpen = false" />
        <UButton
          label="Submit Booking"
          color="primary"
          :loading="isSubmitting"
          @click="submit"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup>
const props = defineProps({
  group: {
    type: Object,
    default: () => ({
      groupName: "",
      groupEmail: "",
      groupPhone: "",
      groupCount: 1,
    }),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const { t: $t } = useI18n();
const toast = useToast();

const isSubmitting = ref(false);
const isOpen = ref(false);

const members = ref([
  {
    name: "",
    cin: "",
    weight: "",
  },
]);

const addMember = () => {
  members.value.push({
    name: "",
    cin: "",
    weight: "",
  });
};

const removeMember = (index) => {
  if (members.value.length > 1) {
    members.value.splice(index, 1);
  }
};

const submit = async () => {
  isSubmitting.value = true;
  try {
    const bookingData = {
      name: props.group.groupName,
      email: props.group.groupEmail,
      phone: props.group.groupPhone,
      count: props.group.groupCount,
      members: members.value,
    };

    const res = await $fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:Bokeh3rU/group`,
      {
        method: "POST",
        body: bookingData,
      }
    );

    console.log("Booking response:", res);

    toast.add({
      title: "Booking saved!",
      description: `${res.count} total bookings.`,
    });

    isOpen.value = false;
  } catch (error) {
    toast.add({
      title: "Error saving booking",
      description: error.message || "Unknown error",
      color: "error",
    });
  } finally {
    isSubmitting.value = false;
  }
};

watch(
  () => props.group.groupName,
  (newName) => {
    members.value[0].name = newName;
  }
);
</script>

<style scoped></style>
