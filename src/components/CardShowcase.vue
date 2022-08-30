<template>
  <article class="p4 rounded-3 bg-white flex flex-col gap-y-8">
    <header>
      <h3 class="font-bold flex justify-between items-center text-5">
        {{ name }}
        <IHeart class="[&>path]:(fill-none stroke-secondary-300)" />
      </h3>
      <p class="text-secondary-300 text-3">{{ type }}</p>
    </header>
    <img
      :src="imgUrl"
      :alt="'an image of a ' + name"
    />
    <ul class="flex justify-between text-secondary-300">
      <li class="flex gap-x-2"><IGasStation />{{ gas }}</li>
      <li class="flex gap-x-2"><IWheel />{{ gear }}</li>
      <li class="flex gap-x-2"><IGroup />{{ capacity }}</li>
    </ul>
    <footer class="flex justify-between items-center">
      <div class="font-bold text-5">{{ price }}.00/<span class="text-secondary-300 text-3">day</span></div>
      <button class="px4 py-2 bg-primary-500 text-white rounded-2">Rent Now</button>
    </footer>
  </article>
</template>
<script setup lang="ts">
defineProps<{
  name: string
  type: string
  imgUrl: string
  price: number
  gas: number
  gear: 'manual' | 'automatic'
  capacity: number
}>()
</script>
