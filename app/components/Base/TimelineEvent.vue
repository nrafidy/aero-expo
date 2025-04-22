<template>
  <div
    class="flex items-center justify-evenly max-w-6xl mx-auto p-6"
    :class="textPosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'"
  >
    <div class="md:flex-1"></div>

    <!-- Circle with Image -->
    <div class="md:flex-1 flex items-center justify-center">
      <div
        class="w-20 h-20 md:w-36 md:h-36 rounded-full bg-secondary-100 flex items-center justify-center"
      >
        <img
          :src="image"
          alt="Icon"
          class="w-16 h-16 md:w-32 md:h-32 object-cover rounded-full"
        />
      </div>
    </div>
    <!-- Conditional text alignment (left or right) -->
    <div :class="textPositionClass" class="ml-6 md:ml-0 md:flex-1">
      <h3 class="text-xl font-semibold text-gray-700">{{ title }}</h3>
      <p class="mt-2 text-neutral-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String, // Event title
  description: String, // Event description
  image: String, // Image URL for the event
  textPosition: {
    type: String,
    default: "left", // Default to left alignment
    validator(value) {
      return ["left", "right"].includes(value);
    },
  },
});

// Computed class for text position
const textPositionClass = computed(() => {
  return props.textPosition === "left"
    ? "md:flex-1 text-justify md:text-right "
    : "md:flex-1 text-justify md:text-left";
});
</script>

<style scoped>
/* You can add any additional styling for the component here if needed */
</style>
