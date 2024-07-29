<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-row gap-6">
      <canvas
        class="rounded-lg shadow-md border cursor-crosshair"
        ref="canvas"
        @mousedown="startDrawing"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
        @mousemove="draw"
      ></canvas>
      <div class="h-full flex flex-col gap-7">
        <ButtonsController
          class="w-fit self-start"
          @toggleEraseMode="toggleEraseMode($event)"
          @toggleUndo="toggleUndo"
          @toggleRedo="toggleRedo"
          @toggleEraseAll="toggleEraseAll"
        />
        <Img2ImgForm class="row-span-3" @generateImg="generateImg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import Img2ImgForm from "./Img2ImgForm.vue";
import ButtonsController from "./ButtonsController.vue";

const SCALE = 5;
const IA_RESOLUTION = 1024;
const HEIGHT = window.innerHeight * 0.9 * SCALE;
const WIDTH = HEIGHT;
const colorLine = ref("black");
const colorLineUndo = ref("white");
const widthLine = ref(5);
const widthLineUndo = ref(15);
// Referencia al canvas y estado de dibujo
const canvas = ref<HTMLCanvasElement | null>(null);
const state = reactive({
  isDrawing: false,
  ctx: null as CanvasRenderingContext2D | null,
  prevX: 0,
  prevY: 0,
  eraseMode: false,
  history: [] as string[],
  redoStack: [] as string[],
});

// Configurar el contexto del canvas
onMounted(() => {
  if (canvas.value !== null) {
    canvas.value.width = WIDTH;
    canvas.value.height = HEIGHT;
    canvas.value.style.width = WIDTH / SCALE + "px";
    canvas.value.style.height = HEIGHT / SCALE + "px";

    state.ctx = canvas.value.getContext("2d");
    if (!state.ctx) return;

    state.ctx.fillStyle = "white"; // Fondo blanco
    state.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    state.ctx.strokeStyle = colorLine.value; // Color del trazo
    state.ctx.lineWidth = widthLine.value; // Ancho del trazo
    state.ctx.lineJoin = "round"; // Suaviza las uniones
    state.ctx.lineCap = "round"; // Suaviza los extremos
    state.ctx.scale(SCALE, SCALE);
    state.ctx.imageSmoothingEnabled = true;
    state.ctx.imageSmoothingQuality = "high";
    window.addEventListener("keydown", handleKeyDown);
  }
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

const generateImg = () => {
  if (!canvas.value) return;
  const canvasElement = canvas.value;

  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
  tempCanvas.width = IA_RESOLUTION;
  tempCanvas.height = IA_RESOLUTION;

  // scale canvas to ia resolution
  if (!tempCtx) return;
  tempCtx.drawImage(canvasElement, 0, 0, tempCanvas.width, tempCanvas.height);

  const dataURL = tempCanvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "canvas-image.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Alternar entre modo de dibujo y borrado
const toggleEraseMode = (ereaseMode = true) => {
  if (!state.ctx) return;

  if (ereaseMode) {
    state.ctx.lineWidth = widthLineUndo.value;
    state.ctx.strokeStyle = colorLineUndo.value;
  } else {
    state.ctx.strokeStyle = colorLine.value;
    state.ctx.lineWidth = widthLine.value;
  }
};

const toggleUndo = () => {
  if (state.history.length > 1) {
    const lastState = state.history.pop();
    if (lastState) {
      state.redoStack.push(lastState);
      restoreState(state.history[state.history.length - 1]);
    }
  }
};

const toggleRedo = () => {
  if (state.redoStack.length > 0) {
    const lastRedoState = state.redoStack.pop();
    if (lastRedoState) {
      state.history.push(lastRedoState);
      restoreState(lastRedoState);
    }
  }
};

const restoreState = (stateURL: string) => {
  const img = new Image();
  img.src = stateURL;
  img.onload = () => {
    if (state.ctx && canvas.value) {
      state.ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
      state.ctx.drawImage(img, 0, 0, WIDTH / SCALE, HEIGHT / SCALE);
    }
  };
};

// Iniciar dibujo o borrado
const startDrawing = (event: MouseEvent) => {
  if (state.ctx) {
    state.isDrawing = true;
    state.prevX = event.offsetX;
    state.prevY = event.offsetY;
    state.ctx.beginPath();
    state.ctx.moveTo(state.prevX, state.prevY);
    saveState();
  }
};

const draw = (event: MouseEvent) => {
  if (state.isDrawing && state.ctx) {
    state.ctx.lineTo(event.offsetX, event.offsetY);
    state.ctx.stroke();
  }
};

const stopDrawing = () => {
  if (state.isDrawing) {
    state.isDrawing = false;
    if (state.ctx) {
      state.ctx.closePath();
      saveState();
    }
  }
};

const saveState = () => {
  if (canvas.value) {
    state.history.push(canvas.value.toDataURL());
    state.redoStack = []; // Clear the redo stack when a new state is saved
  }
};

const toggleEraseAll = () => {
  if (state.ctx && canvas.value) {
    state.ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    saveState();
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  // Ctrl/Cmd + z
  if ((event.ctrlKey || event.metaKey) && event.key === "z") {
    event.preventDefault();
    toggleUndo();
  }
  if ((event.ctrlKey || event.metaKey) && event.key === "s") {
    event.preventDefault();
    generateImg();
  }
};
</script>
