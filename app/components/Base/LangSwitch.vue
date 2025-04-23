<script setup>
const { locale, locales, setLocale } = useI18n();
</script>

<template>
  <div class="flex items-center justify-center space-x-2">
    <button v-for="loc in locales" @click="setLocale(loc.code)">
      <UIcon
        :name="loc.emoji"
        class="size-6"
        :class="loc.code === locale ? '' : 'grayscale'"
      />
    </button>
  </div>
</template>
