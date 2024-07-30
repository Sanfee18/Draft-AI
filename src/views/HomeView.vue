<template>
  <main
    class="flex flex-col items-center text-slate-800 overflow-y-auto gap-96 pb-96"
  >
    <WelcomeComponent />
    <WelcomeRoadMap />
  </main>
</template>
<script setup lang="ts">
import WelcomeComponent from "@/components/HomeView/WelcomeComponent.vue";
import WelcomeRoadMap from "@/components/HomeView/WelcomeRoadMap.vue";
</script>
