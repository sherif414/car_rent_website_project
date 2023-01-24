<template>
  <main class="grid justify-center bg-white">
    <div class="grid grid-cols-12 gap-x-8 max-w-1400px w-full pt16 pr-8 bg-main">
      <SideBar />
      <div class="grid grid-cols-3 col-span-9 2xl:grid-cols-4 gap-8 my-8">
        <div class="flex gap-x-8 col-span-full relative">
          <CardRent title="Pick-Up" />
          <button class="bg-primary-500 p-4 absolute h-max rounded-3 shadow-xl left-47.3% top-25%">
            <ISwitch />
          </button>
          <CardRent title="Drop-Off" />
        </div>
        <CardShowcase
          v-for="car in data"
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
    </div>
  </main>
</template>

<script setup lang="ts">
import data from '~/services'
</script>
