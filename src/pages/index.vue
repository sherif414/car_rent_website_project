<script setup lang="ts">
import data from '~/services'
</script>

<template>
  <main class="bg-#F6F7F9 text-secondary-500 px8">
    <NavBar />
    <!-- top section -->
    <section class="grid grid-rows-[1fr_max-content] h-screen pt28 pb8">
      <!-- advertisement cards wrapper -->
      <div class="grid grid-cols-2 gap-x-8 text-white">
        <!-- left card -->
        <article class="px8 pt8 pb20 rounded-3 bg-info-500 ad__card--1">
          <h2 class="text-8 w-50%">The Best Platform<br />For Car Rental</h2>
          <p class="w-50%">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button class="w-max px4 py2 rounded-1 bg-primary-500">rental car</button>
        </article>
        <!-- right card -->
        <article class="px8 pt8 pb20 rounded-3 bg-primary-500 ad__card--2">
          <h2 class="text-8 w-50%">Easy way to rent a car at a low price</h2>
          <p class="w-50%">Providing cheap car rental services and safe and comfortable facilities.</p>
          <button class="w-max px4 py2 rounded-1 bg-info-500">rental car</button>
        </article>
      </div>
      <div class="flex gap-x-8 mt8">
        <CardRent title="Pick-Up" />
        <button class="bg-primary-500 p-4 h-max rounded-3 shadow-xl">
          <ISwitch />
        </button>
        <CardRent title="Drop-Off" />
      </div>
    </section>

    <!-- popular cards grid -->
    <section class="h-screen">
      <header class="flex text-5 mb-8">
        <h2 class="text-secondary-300">Popular Cars</h2>
        <a class="ml-auto text-primary-500">view all</a>
      </header>
      <div class="grid grid-cols-4 gap-x-4">
        <CardShowcase
          v-for="car in data"
          :name="car.name"
          :price="car.price"
          :type="car.type"
          :gas="car.gas"
          :gear="car.gear"
          :capacity="car.capacity"
          :imgUrl="car.imgUrl"
        />
      </div>
    </section>
  </main>
</template>

<style>
.ad__card--1 {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: start;
  background: url('../assets/svg/ad_bg1.svg') no-repeat;
  background-size: contain;
}

.ad__card--2 {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: start;
  background: url('../assets/svg/ad_bg2.svg') no-repeat;
  background-size: contain;
}
</style>
