<template>
  <UModal
    v-model:open="isOpen"
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
      <UForm
        v-if="!submitted"
        ref="form"
        class="space-y-4 space-x-4"
        @submit.prevent="submit"
      >
        <!-- :validate="validate" -->
        <div class="space-y-2">
          <div
            v-for="(member, index) in members"
            :key="index"
            class="flex gap-2 p-2 border border-primary-100 rounded-lg transition-all"
            :class="{
              'border-primary-200 bg-primary-50': index % 2 === 0,
            }"
          >
            <UFormField required>
              <UInput
                v-model="member.name"
                :placeholder="$t('booking.modal.placeholders.name')"
                icon="i-heroicons-user"
              />
            </UFormField>

            <UFormField required>
              <UInput
                v-model="member.cin"
                :placeholder="$t('booking.modal.placeholders.id')"
                icon="i-heroicons-identification"
              />
            </UFormField>

            <UFormField required>
              <UInput
                v-model="member.weight"
                :placeholder="$t('booking.modal.placeholders.weight')"
                icon="material-symbols:weight-outline"
                type="number"
              />
            </UFormField>

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
      </UForm>
      <div v-else class="mt-6 p-6 bg-green-100 rounded">
        <h2 class="text-xl font-bold text-green-800 mb-2">
          {{ $t("booking.success_title") }}
        </h2>
        <p>
          <strong>{{ $t("booking.modal.placeholders.name") }}:</strong>
          {{ submittedData.group.name }}
        </p>
        <p>
          <strong>{{ $t("booking.modal.placeholders.email") }}:</strong>
          {{ submittedData.group.email }}
        </p>
        <p>
          <strong>{{ $t("booking.modal.placeholders.phone") }}:</strong>
          {{ submittedData.group.phone }}
        </p>
        <p>
          <strong>{{ $t("booking.modal.placeholders.registrants") }}:</strong>
        </p>
        <ul class="list-disc ml-5 mt-2">
          <li v-for="(m, i) in submittedData.members" :key="i">
            {{ m.name }} (CIN: {{ m.cin }}, Weight: {{ m.weight }})
          </li>
        </ul>
      </div>
    </template>

    <template #footer>
      <div class="flex w-full justify-end items-center gap-2">
        <UButton
          :label="
            submitted ? $t('booking.modal.close') : $t('booking.modal.cancel')
          "
          color="gray"
          @click="isOpen = false"
        />
        <UButton
          v-if="!submitted"
          label="Submit Booking"
          color="primary"
          type="submit"
          :loading="isSubmitting"
          :disabled="isSubmitting || disableSubmit"
          @click="handleSubmit"
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
const form = useTemplateRef("form");
const submitted = ref(false);
const submittedData = ref({});

const disableSubmit = computed(() => {
  return (
    !props.group.groupName ||
    !props.group.groupEmail ||
    !props.group.groupPhone ||
    !props.group.groupCount ||
    members.value.some(
      (member) =>
        !member.name?.trim() ||
        !member.cin?.trim() ||
        !member.weight?.toString().trim()
    )
  );
});

const members = ref([
  {
    name: "",
    cin: "",
    weight: "",
  },
]);

const validate = () => {
  const errors = [];

  // Check if any member is missing a name
  if (members.value.some((member) => !member.name?.trim())) {
    errors.push({ name: "name", message: "Field is required" });
  }
  if (members.value.some((member) => !member.cin?.trim())) {
    errors.push({ name: "cin", message: "Field is required" });
  }
  if (members.value.some((member) => !member.weight?.toString().trim())) {
    errors.push({ name: "weight", message: "Field is required" });
  }

  return errors;
};

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

const handleSubmit = () => {
  if (form.value.validate()) {
    submit();
  } else {
    toast.add({
      title: $t("booking.validation_error_title"),
      description: $t("booking.validation_error_description"),
      color: "error",
    });
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

    toast.add({
      title: $t("booking.success_title"),
      description: `${$t("booking.count_registered")} ${members.value.length}`,
      color: "success",
    });

    submittedData.value = res;
    submitted.value = true;

    // isOpen.value = false;
  } catch (error) {
    toast.add({
      title: $t("booking.error_title"),
      description: $t("booking.error_message"),
      color: "error",
    });
  } finally {
    isSubmitting.value = false;
  }
};

watch(
  () => isOpen.value,
  () => {
    if (isOpen.value) {
      submitted.value = false;
      submittedData.value = {};

      // Reset members when modal opens
      members.value = Array.from({ length: props.group.groupCount }, () => ({
        name: "",
        cin: "",
        weight: "",
      }));
      members.value[0].name = props.group.groupName;
    }
  }
);
</script>

<style scoped></style>
