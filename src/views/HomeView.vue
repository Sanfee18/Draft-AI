<template>
  <main
    class="flex flex-col items-center text-slate-800 overflow-y-auto gap-40 pb-96 snap-y snap-mandatory"
  >
    <WelcomeComponent />
    <WelcomeExamples />
    <WelcomeRoadMap />
    <WelcomeRoadMap />
    <WelcomeRoadMap />
    <WelcomeRoadMap />
    <WelcomeRoadMap />
    <WelcomeRoadMap />
    <video
      src="@/assets/videos/background.mp4"
      class="absolute -z-10 w-auto min-w-full min-h-full max-w-none opacity-15"
      muted
      autoplay
      loop
    ></video>
  </main>
</template>
<script setup lang="ts">
import WelcomeComponent from "@/components/HomeView/WelcomeComponent.vue";
import WelcomeExamples from "@/components/HomeView/WelcomeExamples.vue";
import WelcomeRoadMap from "@/components/HomeView/WelcomeRoadMap.vue";
</script>
