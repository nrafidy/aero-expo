<template>
  <ULink
    :to="to"
    exact-hash
    inactive-class="text-neutral"
    active-class="border-secondary-400 border-b-2"
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
});
</script>

<style></style>
