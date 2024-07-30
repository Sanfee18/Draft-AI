<template>
  <section class="flex flex-row h-screen">
    <SideBar />
    <RouterView class="my-4 mx-6 flex-1" />
  </section>
</template>
<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import { RouterView } from "vue-router";
</script>
