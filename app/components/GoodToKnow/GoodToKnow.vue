<template>
  <section id="good-to-know" class="bg-primary-950 text-neutral-50 py-12">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-3xl font-semibold mb-8 text-center">
        {{ $t("good-to-know.title") }}
      </h2>
      <h3
        class="text-2xl font-semibold mb-4 text-center md:text-left md:ml-28 lg:ml-12"
      >
        {{ $t("good-to-know.program") }}
      </h3>
      <div class="flex flex-col lg:flex-row justify-around space-y-12">
        <div data-aos="fade-right" class="flex flex-col items-center space-y-6">
          <strong>{{ $t("good-to-know.date1") }}</strong>
          <div class="overflow-x-auto my-8">
            <table
              class="min-w-full divide-y divide-primary-200 border-b border-primary-200"
            >
              <thead class="bg-primary-900">
                <tr>
                  <th class="px-6 py-3 text-left text-sm font-medium">
                    {{ $t("good-to-know.schedule.time") }}
                  </th>
                  <th class="px-6 py-3 text-left text-sm font-medium">
                    {{ $t("good-to-know.schedule.activity") }}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-primary-200">
                <tr v-for="(item, index) in saturday" :key="'sat-' + index">
                  <td class="px-6 py-4 text-sm whitespace-nowrap">
                    {{ item.time }}
                  </td>
                  <td class="px-6 py-4 text-sm">
                    {{ item.activity }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div data-aos="fade-left" class="flex flex-col items-center space-y-6">
          <strong>{{ $t("good-to-know.date2") }}</strong>
          <div class="overflow-x-auto my-8">
            <table
              class="min-w-full divide-y divide-primary-200 border-b border-primary-200"
            >
              <thead class="bg-primary-900">
                <tr>
                  <th class="px-6 py-3 text-left text-sm font-medium">
                    {{ $t("good-to-know.schedule.time") }}
                  </th>
                  <th class="px-6 py-3 text-left text-sm font-medium">
                    {{ $t("good-to-know.schedule.activity") }}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-primary-200">
                <tr v-for="(item, index) in sunday" :key="'sun-' + index">
                  <td class="px-6 py-4 text-sm whitespace-nowrap">
                    {{ item.time }}
                  </td>
                  <td class="px-6 py-4 text-sm">
                    {{ item.activity }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t: $t } = useI18n();

const saturday = ref([
  // { time: "06:30", activity: $t("good-to-know.schedule.saturday.activity1") },
  // { time: "08:00", activity: $t("good-to-know.schedule.saturday.activity2") },
  // { time: "08:45", activity: $t("good-to-know.schedule.saturday.activity3") },
  { time: "09:00", activity: $t("good-to-know.schedule.saturday.activity4") },
  { time: "09:55", activity: $t("good-to-know.schedule.saturday.activity5") },
  { time: "10:10", activity: $t("good-to-know.schedule.saturday.activity6") },
  { time: "10:15", activity: $t("good-to-know.schedule.saturday.activity7") },
  { time: "10:20", activity: $t("good-to-know.schedule.saturday.activity8") },
  { time: "10:30", activity: $t("good-to-know.schedule.saturday.activity9") },
  { time: "10:40", activity: $t("good-to-know.schedule.saturday.activity10") },
  { time: "11:00", activity: $t("good-to-know.schedule.saturday.activity11") },
  {
    time: "11:15",
    activity: $t("good-to-know.schedule.saturday.activity12"),
  },
  { time: "12:30", activity: $t("good-to-know.schedule.saturday.activity13") },
  { time: "13:00", activity: $t("good-to-know.schedule.saturday.activity14") },
  { time: "13:30", activity: $t("good-to-know.schedule.saturday.activity15") },
  { time: "14:00", activity: $t("good-to-know.schedule.saturday.activity16") },
  { time: "14:30", activity: $t("good-to-know.schedule.saturday.activity17") },
  { time: "15:00", activity: $t("good-to-know.schedule.saturday.activity18") },
  { time: "15:30", activity: $t("good-to-know.schedule.saturday.activity19") },
  { time: "16:00", activity: $t("good-to-know.schedule.saturday.activity20") },
  { time: "17:30", activity: $t("good-to-know.schedule.saturday.activity21") },
  { time: "20:00", activity: $t("good-to-know.schedule.saturday.activity22") },
]);

const sunday = ref([
  // { time: "07:00", activity: $t("good-to-know.schedule.sunday.activity1") },
  { time: "09:00", activity: $t("good-to-know.schedule.sunday.activity2") },
  { time: "09:30", activity: $t("good-to-know.schedule.sunday.activity3") },
  { time: "10:00", activity: $t("good-to-know.schedule.sunday.activity4") },
  { time: "10:30", activity: $t("good-to-know.schedule.sunday.activity5") },
  { time: "11:00", activity: $t("good-to-know.schedule.sunday.activity6") },
  { time: "11:30", activity: $t("good-to-know.schedule.sunday.activity7") },
  { time: "12:00", activity: $t("good-to-know.schedule.sunday.activity8") },
  { time: "12:30", activity: $t("good-to-know.schedule.sunday.activity9") },
  { time: "13:30", activity: $t("good-to-know.schedule.sunday.activity10") },
  { time: "14:00", activity: $t("good-to-know.schedule.sunday.activity11") },
  { time: "14:30", activity: $t("good-to-know.schedule.sunday.activity12") },
  { time: "15:00", activity: $t("good-to-know.schedule.sunday.activity13") },
  { time: "15:30", activity: $t("good-to-know.schedule.sunday.activity14") },
  { time: "17:30", activity: $t("good-to-know.schedule.sunday.activity15") },
]);
</script>

<style></style>
