<template>
  <section class="flex flex-row h-screen">
    <router-view name="SideBar" />
    <router-view class="flex-1" v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.fade-enter-active {
  transition: all 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
