<template>
  <section
    id="activities"
    class="py-16 text-center mx-auto bg-neutral-50 text-primary-950"
  >
    <h2 class="text-3xl font-semibold mb-12">À quoi s'attendre</h2>

    <div class="relative space-y-12">
      <!-- Vertical Line -->
      <div
        class="absolute left-16 md:left-1/2 top-0 h-full w-0.5 bg-secondary-100 z-0 transform -translate-x-1/2"
      ></div>

      <!-- Timeline Events -->
      <BaseTimelineEvent
        v-for="(event, index) in eventDetails['fr']"
        :key="index"
        :title="event.title"
        :description="event.description"
        :image="event.img"
        :textPosition="index % 2 === 0 ? 'left' : 'right'"
        class="relative z-10"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const eventDetails = {
  fr: [
    {
      title: "🚁 Exposition d'Aéronefs",
      description:
        "Découvrez une large gamme d'appareils, des avions aux hélicoptères en passant par les drones, militaires et civils.",
      img: "/airshow.jpg",
    },
    {
      title: "✈️ Baptême de l'Air",
      description:
        "Profitez d'une expérience unique en montant à bord d'un avion ou d'un hélicoptère pour une vue spectaculaire du ciel.",
      img: "/airshow.jpg",
    },
    {
      title: "🪂 Saut en Tandem",
      description:
        "Vivez une montée d'adrénaline en effectuant un saut en parachute en binôme avec des professionnels du domaine.",
      img: "/airshow.jpg",
    },
    {
      title: "🛩️ Démonstration Aérienne",
      description:
        "Assistez à des démonstrations spectaculaires réalisées par les pilotes d'élite de l'Armée de l'Air Malagasy.",
      img: "/airshow.jpg",
    },
    {
      title: "🎪 Stands d'Exposition",
      description:
        "Visitez les espaces dédiés aux centres de formation, compagnies aériennes, entreprises aéronautiques, ainsi qu’aux partenaires touristiques et économiques.",
      img: "/airshow.jpg",
    },
    {
      title: "🎶 Animations Musicales et Culturelles",
      description:
        "Profitez de spectacles musicaux en live, de performances traditionnelles et d’animations tout au long de l’événement.",
      img: "/airshow.jpg",
    },
    {
      title: "🎤 Conférences Thématiques",
      description:
        "Assistez à des conférences passionnantes animées par des experts et professionnels du secteur aéronautique.",
      img: "/airshow.jpg",
    },
    {
      title: "👨‍✈️ Rencontre avec les Pilotes",
      description:
        "Échangez avec les pilotes expérimentés et découvrez leurs parcours, leurs missions et leur passion pour l’aviation.",
      img: "/airshow.jpg",
    },
    {
      title: "🛸 Démonstrations de Drones",
      description:
        "Assistez à des démonstrations de drones de dernière génération avec des vols interactifs et des spectacles aériens.",
      img: "/airshow.jpg",
    },
    {
      title: "🎈 Aire de Jeux pour Enfants",
      description:
        "Une zone de jeux fun et sécurisée, pleine d'activités pour divertir les plus jeunes.",
      img: "/airshow.jpg",
    },
  ],
  en: [
    {
      title: "🚁 Aircraft Exhibition",
      description:
        "Discover a wide range of aircraft on display, including planes, helicopters, and drones, both military and civilian.",
      img: "/airshow.jpg",
    },
    {
      title: "✈️ Discovery Flights",
      description:
        "Enjoy a once-in-a-lifetime experience aboard an airplane or helicopter and see the world from above.",
      img: "/airshow.jpg",
    },
    {
      title: "🪂 Tandem Skydiving",
      description:
        "Take the leap with a professional in a thrilling tandem parachute jump — adrenaline guaranteed!",
      img: "/airshow.jpg",
    },
    {
      title: "🛩️ Air Show",
      description:
        "Be amazed by high-energy aerial demonstrations performed by the elite pilots of the Malagasy Air Force.",
      img: "/airshow.jpg",
    },
    {
      title: "🎪 Exhibition Stands",
      description:
        "Visit booths featuring training centers, airlines, aviation companies, tourism operators, and economic development partners.",
      img: "/airshow.jpg",
    },
    {
      title: "🎶 Cultural & Musical Performances",
      description:
        "Enjoy live music, traditional performances, and entertainment throughout the event.",
      img: "/airshow.jpg",
    },
    {
      title: "🎤 Thematic Conferences",
      description:
        "Attend insightful talks and panels led by industry experts and aviation professionals.",
      img: "/airshow.jpg",
    },
    {
      title: "👨‍✈️ Meet the Pilots",
      description:
        "Exchange with experienced aviators and military personnel to learn about their careers and missions.",
      img: "/airshow.jpg",
    },
    {
      title: "🛸 Drone Demonstrations",
      description:
        "Witness cutting-edge drone technology in action through interactive demos and flight showcases.",
      img: "/airshow.jpg",
    },
    {
      title: "🎈 Kids’ Zone",
      description:
        "A fun and safe area full of games and activities designed just for children.",
      img: "/airshow.jpg",
    },
  ],
};
</script>

<style></style>
