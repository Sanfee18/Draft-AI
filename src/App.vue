<template>
  <section class="flex flex-row h-screen">
    <!--<SideBar />-->
    <RouterView class="flex-1" />
    <!--my-4 mx-6 -->
  </section>
</template>
<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import { RouterView } from "vue-router";
</script>
