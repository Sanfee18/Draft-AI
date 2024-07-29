<template>
  <div class="flex flex-row">
    <SideBar />
    <RouterView class="max-h-screen m-6 flex-1" />
    <!--bg-slate-100/40 p-4 border-slate-950 rounded-xl -->
  </div>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>
