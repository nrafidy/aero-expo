<template>
  <section id="good-to-know" class="bg-primary-950 text-neutral-50 py-12">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-3xl font-semibold mb-8 text-center">Bon à savoir</h2>
      <h3
        class="text-2xl font-semibold mb-4 text-center md:text-left md:ml-28 lg:ml-12"
      >
        Programme
      </h3>
      <div class="flex flex-col lg:flex-row justify-around space-y-12">
        <div class="flex flex-col items-center space-y-6">
          <strong>Samedi 31 Mai</strong>
          <div class="overflow-x-auto my-8">
            <table
              class="min-w-full divide-y divide-primary-200 border-b border-primary-200"
            >
              <thead class="bg-primary-900">
                <tr>
                  <th class="px-6 py-3 text-left text-sm font-medium">Heure</th>
                  <th class="px-6 py-3 text-left text-sm font-medium">
                    Activité
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
        <div class="flex flex-col items-center space-y-6">
          <strong>Dimanche 01 Juin</strong>
          <div class="overflow-x-auto my-8">
            <table
              class="min-w-full divide-y divide-primary-200 border-b border-primary-200"
            >
              <thead class="bg-primary-900">
                <tr>
                  <th class="px-6 py-3 text-left text-sm font-medium">Heure</th>
                  <th class="px-6 py-3 text-left text-sm font-medium">
                    Activité
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
const saturday = ref([
  {
    time: "09:30",
    activity: "Ouverture officielle et Arrivée des autorités en Hélico",
  },
  {
    time: "10:30",
    activity: "Tirage au sort Baptême de l’air Avion",
  },
  {
    time: "11:00 - 11:20",
    activity: "Baptême de l’air Avion",
  },
  {
    time: "11:30 - 12:00",
    activity: "Initiation Roulage sur Tetras",
  },
  {
    time: "12:00 - 13:00",
    activity: "Prise de parole par stand et animation",
  },
  {
    time: "13:00 - 13:45",
    activity: "Conférence",
  },
  {
    time: "13:45 - 14:00",
    activity: "Tirage au sort Baptême de l’air Hélico",
  },
  {
    time: "14:15 - 14:30",
    activity: "Baptême de l’air Hélico",
  },
  {
    time: "15:00 - 15:30",
    activity: "Démonstration Drone",
  },
  {
    time: "15:30 - 17:00",
    activity: "Animation, concert, Tirage au sort pour saut tandem",
  },
]);

const sunday = ref([
  {
    time: "09:00",
    activity: "Ouverture",
  },
  {
    time: "09:30",
    activity: "Saut tandem",
  },
  {
    time: "10:00",
    activity: "Conférence, Concours simulateur",
  },
  {
    time: "11:00 - 12:00",
    activity: "Défilé aérien, Démonstration Dynamique",
  },
  {
    time: "12:15 - 13:00",
    activity: "Prise de parole par stand et animation",
  },
  {
    time: "13:15 - 13:30",
    activity: "Baptême de l’air, Avion",
  },
  {
    time: "13:45 - 14:00",
    activity: "Baptême de l’air, Hélico",
  },
  {
    time: "14:15 - 14:45",
    activity: "Saut tandem, ",
  },
  {
    time: "15:00 - 15:15",
    activity: "Baptême de l’air",
  },
  {
    time: "15:30 - 17:00",
    activity:
      "Animation, Concert, Tirage au sort des lots avec les partenaires",
  },
]);
</script>

<style></style>

<!-- ✈️ Good to Know (À savoir)
📅 Dates & Times
Event Dates: May 31 – June 1, 2025

Opening Hours: 9:00 AM – 6:00 PM

📍 Location
Venue: Escadron Hélicoptère d'Ivato, Antananarivo, Madagascar

GPS Coordinates / Map Link (optional)

🎟️ Entrance
Free / Ticketed (Specify if registration is required)

How to register or get tickets (link or platform name)

🚗 Transportation & Access
Parking info: on-site parking / shuttle options

Nearest bus stops or public transit

Access for people with disabilities

🍴 Food & Drinks
Food court or food truck zones

Picnic areas or dining zones

Water stations

🧒 Families & Kids
Stroller-friendly paths

Kids' zone / playground

Changing stations or family areas

💼 Professional Access
B2B/Networking zones

Exhibitor check-in info

Press and media registration

⚠️ Security & Safety
Security checks at the entrance

First aid stations and lost & found

Drone policy or flight restrictions

📸 Photography
Allowed / Not allowed

Use of photos for media or official recap

Hashtags to use: #AeroExpo2025 #MadagascarAirShow

📱 Connectivity
Free Wi-Fi availability

Event app or info screens

Charging stations (if any) -->
