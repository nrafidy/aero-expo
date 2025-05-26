<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">
      Enregistrements ({{ bookings.length }})
    </h1>

    <div v-if="loading" class="text-gray-500">Chargement...</div>
    <div v-else-if="bookings.length === 0" class="text-gray-500">
      Pas d'enregistrement disponible actuellement.
    </div>

    <div v-else class="grid gap-4">
      <div
        v-for="(booking, index) in bookings"
        :key="index"
        class="bg-white shadow p-4 rounded-lg border border-gray-200"
      >
        <p><strong>Nom:</strong> {{ booking.name }}</p>
        <p><strong>Email:</strong> {{ booking.email }}</p>
        <p><strong>Téléphone:</strong> {{ booking.phone }}</p>
        <p><strong>Inscrits:</strong></p>
        <ul class="list-disc list-inside ml-4">
          <li v-for="(member, idx) in booking._members" :key="idx">
            {{ member.name }} (CIN: {{ member.cin }}, Weight:
            {{ member.weight }})
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const bookings = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const data = await $fetch(
      "https://x8ki-letl-twmt.n7.xano.io/api:Bokeh3rU/group"
    );
    bookings.value = data || [];
  } catch (e) {
    console.error("Error fetching bookings:", e);
  } finally {
    loading.value = false;
  }
});
</script>
