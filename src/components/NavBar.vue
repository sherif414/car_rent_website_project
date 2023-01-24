<script setup lang="ts"></script>

<template>
  <header class="w-full fixed top-0 left-0 bg-white grid lg:(max-h-20) py2 place-items-center border-b z-99">
    <nav
      class="grid lt-lg:(grid-rows-2 grid-cols-[1fr_min-content] px8 gap-y-4) lg:(grid-col-12 gap-x-16 px-12) w-full max-w-1400px"
    >
      <!-- logo -->
      <router-link
        to="/"
        class="lg:(col-span-2) text-2rem font-bold text-primary-500"
        >MORENT</router-link
      >
      <!-- search bar -->
      <div class="flex gap-x-4 lg:(col-span-4) lt-lg:(row-start-2 col-span-full) border items-center px-4 rounded-full">
        <ISearch class="w5" />
        <input
          class="placeholder:text-secondary-400 text-3 focus:outline-none grow"
          type="search"
          placeholder="search.."
        />
        <IFilter class="w5" />
      </div>
      <!-- icon buttons -->
      <div class="lg:(col-span-2 col-start-11 ml-auto) lt-lg:(hidden) flex justify-center items-center gap-x-2">
        <div class="p2 rounded-50% border cursor-pointer">
          <IHeart class="w-4 h4" />
        </div>
        <div class="p2 rounded-50% border cursor-pointer">
          <IBell class="w-4 h4" />
        </div>
        <div class="p2 rounded-50% border cursor-pointer">
          <ISettings class="w-4 h4" />
        </div>
        <div class="rounded-50% overflow-hidden h10 w10 cursor-pointer">
          <img
            class="aspect-square w-full h-full bg-cover"
            src="/src/assets/img/kachan.jpg"
            alt="avatar img"
          />
        </div>
      </div>
      <div class="rounded-50% overflow-hidden h10 w10 cursor-pointer lg:(hidden)">
        <img
          class="aspect-square w-full h-full bg-cover"
          src="/src/assets/img/kachan.jpg"
          alt="avatar img"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
