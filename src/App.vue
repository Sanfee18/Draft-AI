<template>
  <section class="flex flex-row h-screen">
    <RouterView name="SideBar" />
    <RouterView class="flex-1" />
  </section>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
