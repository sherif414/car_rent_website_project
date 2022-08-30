<script setup lang="ts"></script>

<template>
  <nav class="grid grid-cols-12 items-center px-2rem py-1rem bg-white border-b fixed top-0 left-0 w-full">
    <!-- logo -->
    <a
      href="#"
      class="col-span-2 text-2rem font-bold text-primary-500"
      >MORENT</a
    >

    <!-- search bar -->
    <div class="flex gap-x-4 col-span-4 border px-4 py-3 rounded-full">
      <ISearch />
      <input
        class="placeholder:text-secondary-400 text-3 focus:outline-none grow"
        type="search"
        placeholder="search something here"
      />
      <IFilter class="ml-auto" />
    </div>

    <!-- icon buttons -->
    <div class="col-span-2 col-start-11 flex justify-center items-center gap-x-2">
      <div class="p2 rounded-50% border">
        <IHeart />
      </div>
      <div class="p2 rounded-50% border">
        <IBell />
      </div>
      <div class="p2 rounded-50% border">
        <ISettings />
      </div>
      <div class="rounded-50% overflow-hidden h-12 w-12">
        <img
          class="aspect-square w-full h-full bg-cover"
          src="src/assets/img/kachan.jpg"
          alt="avatar img"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
