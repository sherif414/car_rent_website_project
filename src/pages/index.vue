<script setup lang="ts">
import data from '~/services'

const popularCars = data.slice(0, 4)
const recommendedCars = data.slice(4)
</script>

<template>
  <main class="bg-main grid justify-center text-secondary-500 lt-lg(px8) lg:(px12) pb16">
    <!-- top section -->
    <section class="grid lg:(grid-rows-[1fr_max-content]) pb12 pt24 w-full max-w-1400px">
      <!-- advertisement cards wrapper -->
      <div class="grid lg:(grid-cols-2 gap-x-8) lt-lg:(gap-y-8) text-white">
        <!-- left card -->
        <article class="lg:(pt8 pb44 px12) rounded-3 bg-info-500 ad__card--1 relative">
          <h2 class="text-8 w-60%">The Best Platform<br />For Car Renting</h2>
          <p class="w-60%">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button class="w-max px4 py2 rounded-1 bg-primary-500">Rent Now</button>
          <img
            class="absolute bottom-8% place-self-center transform 2xl:(scale-120 bottom-10%) translate-x-8"
            src="../assets/img/card_bg_1.png"
            alt="a car image"
          />
        </article>
        <!-- right card -->
        <article class="pt8 pb44 px12 rounded-3 bg-primary-500 ad__card--2 relative">
          <h2 class="text-8 w-60%">Easy way to rent a car at a low price</h2>
          <p class="w-60%">Providing cheap car rental services and safe and comfortable facilities.</p>
          <button class="w-max px4 py2 rounded-1 bg-info-500">Rent Now</button>
          <img
            class="absolute bottom-8% place-self-center transform 2xl:(scale-120 bottom-10%) translate-x-8"
            src="../assets/img/card_bg_2.png"
            alt="a car image"
          />
        </article>
      </div>
      <!-- renting cards -->
      <div class="flex gap-x-8 mt8">
        <CardRent title="Pick-Up" />
        <button class="bg-primary-500 p-4 h-max rounded-3 shadow-xl">
          <ISwitch />
        </button>
        <CardRent title="Drop-Off" />
      </div>
    </section>

    <!-- popular cars showcase -->
    <section class="mt8">
      <header class="flex mb-6">
        <h2 class="text-primary-400 font-medium pl4">Popular Now</h2>
        <a class="ml-auto text-primary-500">view all</a>
      </header>
      <div class="grid gap-y-4 lg:(grid-cols-4 gap-4)">
        <CardShowcase
          v-for="car in popularCars"
          :id="car.id"
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

    <!-- recommended cars showcase -->
    <section class="mt-16">
      <header class="flex mb-6">
        <h2 class="text-secondary-300 font-medium pl4">Recommended</h2>
        <a class="ml-auto text-primary-500">view all</a>
      </header>
      <div class="grid lg:(grid-cols-4 gap-x-4) gap-y-8">
        <CardShowcase
          v-for="car in recommendedCars"
          :id="car.id"
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
  row-gap: 1.5rem;
  justify-content: start;
  background-image: url('../assets/svg/ad_bg1.svg');
  background-size: cover;
}

.ad__card--2 {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  justify-content: start;
  background-image: url('../assets/svg/ad_bg2.svg');
  background-size: cover;
}
</style>
