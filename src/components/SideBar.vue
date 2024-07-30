<template>
  <nav
    class="w-1/6 h-screen backdrop-blur-md bg-white/40 rounded-r-xl flex flex-col justify-between p-3"
  >
    <ul class="flex flex-col">
      <li title="Home">
        <router-link
          to="/"
          class="hover:bg-slate-50 p-3 rounded-lg cursor-pointer flex flex-col"
        >
          <span class="text-sm text-slate-600">Home</span>
          <span class="text-base text-slate-800 font-semibold"
            >Draft AI 👨🏼‍🎨</span
          >
        </router-link>
      </li>
      <li><hr class="border-slate-800" /></li>
      <!--COMPONENTS WITH AI-->
      <li title="Img2Img">
        <router-link
          to="/img2img"
          class="hover:bg-slate-50 p-3 rounded-lg cursor-pointer flex flex-col"
        >
          <span class="text-base text-slate-800">Img2Img</span>
          <span class="text-sm text-slate-600">Draw with AI</span>
        </router-link>
      </li>
    </ul>
    <footer class="flex flex-col">
      <hr class="border-slate-800" />
      <!--INFO PAGES-->
      <router-link
        class="hover:bg-white p-1 rounded-lg cursor-pointer flex flex-col"
        title="Road map"
        to="/road-map"
      >
        <span class="text-base text-slate-800">Road map</span>
        <span class="text-sm text-slate-600">Little road map</span>
      </router-link>
      <router-link
        class="hover:bg-white p-1 rounded-lg cursor-pointer flex flex-col"
        title="About us"
        to="/about"
      >
        <span class="text-base text-slate-800">About</span>
        <span class="text-sm text-slate-600">Info about us</span>
      </router-link>

      <div class="flex flex-row justify-end">
        <a
          class="p-2 hover:bg-white rounded-lg cursor-pointer"
          :href="GITHUB_LINK"
          target="_blank"
          title="Show our repository"
        >
          <GithubIcon class="w-8" />
        </a>
      </div>
    </footer>
  </nav>
</template>
<script setup lang="ts">
import GithubIcon from "./icons/GithubIcon.vue";
const GITHUB_LINK = "https://github.com/Sanfee18/Draft-AI";
// const LINKEDIN_CONTRIBUTORS = [
//   "https://www.linkedin.com/in/david-sanfelix",
//   "https://www.linkedin.com/in/raulpifodev",
// ];
</script>
<style scoped>
.router-link-exact-active {
  @apply bg-gray-100;
  /*@apply font-bold;*/
}
</style>
