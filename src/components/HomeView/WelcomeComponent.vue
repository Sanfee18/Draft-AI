<template>
  <section
    class="flex flex-col justify-center items-center gap-24 pt-32 snap-always snap-start"
  >
    <header class="text-4xl">😮‍💨 Bienvenido Draft AI!</header>
    <main class="flex flex-col justify-center items-center gap-24">
      <h1 class="text-7xl text-center space-y-0 font-light">
        Nuestra IA convierte tus <br />
        pensamientos en dibujos, <br />
        permitiéndote explorar tu <br />
      </h1>
      <div class="flex flex-col justify-center items-center gap-10">
        <h1 class="text-7xl text-center space-y-0 font-light">
          <span class="text-slate-50 font-bold uppercase"
            >creatividad sin límites</span
          >
        </h1>
        <router-link
          to="/img2img"
          class="border-none rounded-md bg-slate-50 text-slate-800 px-4 py-2 hover:bg-slate-800 hover:text-slate-50 hover:scale-125 duration-300 ease-in-out"
          >Get started <sub>Free beta</sub></router-link
        >
      </div>
    </main>
  </section>
</template>
<style scoped></style>
