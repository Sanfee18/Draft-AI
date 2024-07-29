<template>
  <nav
    class="flex flex-col items-center gap-1 bg-white h-fit p-4 rounded-lg shadow-md border"
  >
    <button
      class="p-2 hover:bg-gray-100 rounded-lg"
      @click="emit('toggleEraseMode', false)"
    >
      <PencilIcon class="w-6" />
    </button>
    <button
      class="p-2 hover:bg-gray-100 rounded-lg"
      @click="emit('toggleEraseMode', true)"
    >
      <EraseIcon class="w-6" />
    </button>
    <button
      class="p-2 hover:bg-gray-100 rounded-lg"
      @click="emit('toggleUndo')"
    >
      <UndoIcon class="w-6" />
    </button>
    <button
      class="p-2 hover:bg-gray-100 rounded-lg"
      @click="emit('toggleRedo')"
    >
      <UndoIcon class="w-6 transform -scale-x-100" />
    </button>
    <button
      class="p-2 hover:bg-gray-100 rounded-lg"
      @click="emit('toggleEraseAll')"
    >
      <TrashIcon class="w-6 transform -scale-x-100" />
    </button>
  </nav>
</template>
<script setup lang="ts">
import EraseIcon from "./icons/EraseIcon.vue";
import PencilIcon from "./icons/PencilIcon.vue";
import UndoIcon from "./icons/UndoIcon.vue";
import TrashIcon from "./icons/TrashIcon.vue";
import { defineEmits } from "vue";

const emit = defineEmits<{
  toggleEraseMode: [boolean];
  toggleUndo: [void];
  toggleRedo: [void];
  toggleEraseAll: [void];
}>();
</script>
