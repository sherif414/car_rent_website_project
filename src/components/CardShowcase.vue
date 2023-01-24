<template>
  <article class="p4 rounded-3 bg-white flex flex-col gap-y-8 shadow">
    <header>
      <h3 class="font-bold flex justify-between items-center text-5">
        {{ name }}
        <IHeart
          @click="isFav = !isFav"
          class="cursor-pointer"
          :class="{ '[&>path]:fill-warning-500': isFav, '[&>path]:fill-none stroke-secondary-300': !isFav }"
        />
      </h3>
      <p class="text-secondary-300 text-3">{{ type }}</p>
    </header>
    <img
      class="py6"
      :src="imgUrl"
      :alt="'an image of a ' + name"
    />
    <ul class="flex justify-between text-secondary-300 text-3">
      <li class="flex gap-x-1 items-center"><IGasStation />{{ gas }}L</li>
      <li class="flex gap-x-1 items-center"><IWheel />{{ gear }}</li>
      <li class="flex gap-x-1 items-center"><IGroup />{{ capacity }}people</li>
    </ul>
    <footer class="flex justify-between items-center">
      <div class="font-bold text-5">${{ price }}.00/<span class="text-secondary-300 text-3">day</span></div>
      <router-link
        :to="`/cars/${id.toString()}`"
        class="px4 py-2 bg-primary-500 text-white rounded-2"
      >
        Rent Now
      </router-link>
    </footer>
  </article>
</template>
<script setup lang="ts">
interface Car {
  id: number
  name: string
  type: string
  imgUrl: string
  price: number
  gas: number
  gear: 'manual' | 'automatic'
  capacity: number
}
defineProps<Car>()

let isFav = $ref(false)
</script>
