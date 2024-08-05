<template>
  <section
    ref="scrollElement"
    class="flex flex-col gap-24 pt-32 snap-always snap-start justify-center items-center"
  >
    <header class="text-4xl">Transforma tu Imaginación con IA</header>
    <main class="flex flex-col justify-center items-center gap-12">
      <h1 class="text-7xl text-center space-y-0 font-light">
        Descubre cómo la IA potencia <br />
        la creatividad y transforma tus <br />
        ideas en imágenes sorprendentes.
      </h1>
      <div class="flex flex-row flex-wrap justify-between w-3/4">
        <img
          lazy
          class="max-w-72 rounded-xl"
          src="@/assets/images/exampleInput.png"
        />
        <img
          ref="section$"
          lazy
          class="max-w-72 rounded-xl"
          src="@/assets/images/exampleInput.png"
        />
      </div>
    </main>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const scrollElement = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && scrollElement.value) {
        scrollElement.value.classList.add("animate-slide-in-right");
        scrollElement.value.classList.add("animate-delay-400");
        scrollElement.value.classList.add("animate-duration-2500");
      }
    });
  });

  if (scrollElement.value) {
    observer.observe(scrollElement.value);
  }
});
</script>
<style scoped></style>
