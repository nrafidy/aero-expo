<template>
  <ULink
    :to="to"
    exact-hash
    inactive-class="text-primary-200 text-sm hover:text-white"
    active-class="border-secondary-400 border-b-2 text-white"
    :active="active"
    class="transition-all duration-400 ease-in-out"
  >
    {{ text }}
  </ULink>
</template>

<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
