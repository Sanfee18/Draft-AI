<template>
  <form
    class="flex flex-col gap-y-4 bg-white h-fit p-4 rounded-lg shadow-md border justify-center"
  >
    <article>
      <label for="idea" class="text-xs">Idea</label>
      <textarea
        id="idea"
        class="border rounded-lg p-2 text-xs w-full"
        type="text"
        placeholder="type your idea"
      />
    </article>
    <article>
      <label for="styles" class="text-xs">Estílos</label>
      <select
        class="appearance-none border rounded-lg p-2 text-xs w-full"
        id="styles"
        name="styles"
      >
        <option value="volvo">Cyberpunk</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </article>
    <article>
      <label for="imagination" class="text-xs block">Imaginación</label>
      <input
        class="accent-slate-800"
        id="imagination"
        type="range"
        min="1"
        max="100"
        value="50"
      />
      <span class="text-xs text-slate-400 block"
        >Fuerza con la que se seguirá el trazo</span
      >
    </article>
    <button
      class="border rounded-lg p-2 bg-slate-800 text-white hover:bg-slate-700 text-lg w-full"
      @click="emit('generateImg')"
    >
      Generate! 🌟
    </button>
  </form>
</template>
<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits<{
  generateImg: [void];
}>();
</script>
