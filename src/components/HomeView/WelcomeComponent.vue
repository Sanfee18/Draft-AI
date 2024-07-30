<template>
  <section
    class="z-50 flex flex-col justify-center items-center gap-24 pt-32 animate-slide-in-top animate-duration-slower snap-always snap-start"
  >
    <h4 class="text-4xl">😮‍💨 Bienvenido Draft AI!</h4>
    <div class="flex flex-col justify-center items-center gap-24">
      <h1 class="text-7xl text-center space-y-0 font-light">
        Nuestra IA convierte tus <br />
        pensamientos en dibujos, <br />
        permitiéndote explorar tu <br />
      </h1>
      <div class="flex flex-col justify-center items-center gap-10">
        <h1 class="text-7xl text-center space-y-0 font-light">
          <u class="text-slate-50 font-bold capitalize"
            >creatividad sin límites</u
          >
        </h1>
        <router-link
          to="/img2img"
          class="border-none rounded-md bg-slate-50 text-slate-800 px-4 py-2 hover:bg-slate-800 hover:text-slate-50 hover:scale-125 duration-300 ease-in-out"
          >Get started <sub>Free beta</sub></router-link
        >
      </div>
    </div>
  </section>
  <video
    src="@/assets/videos/background.mp4"
    class="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-40"
    muted
    autoplay
    loop
  ></video>
</template>
<style scoped></style>
