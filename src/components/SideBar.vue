<template>
  <aside class="bg-white py8 px8 flex flex-col gap-y-8 col-span-3">
    <ul
      class="flex flex-col gap-y-2"
      v-for="list in sidebar"
    >
      <h3 class="text-secondary-300 text-3 mb-2 uppercase">{{ list.name }}</h3>
      <li
        class="text-bold flex gap-x-2 text-[0.8rem]"
        v-for="item in list.items"
      >
        <input
          class="accent-primary-500"
          type="checkbox"
          :id="item + 'id'"
        /><label :for="item + 'id'">{{ item }}</label>
      </li>
    </ul>
    <div class="w-full">
      <h3 class="text-secondary-300 text-3 mb-2 uppercase">price</h3>
      <input
        v-model="price"
        class="accent-primary-500 w-full"
        type="range"
      />
      <p>Max price ${{ price }}.00</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
let price = $ref(50)
const sidebar = {
  type: { name: 'type', items: ['Sport', 'SUV', 'Hatchback', 'Sedan', 'Coupe'] },
  capacity: { name: 'capacity', items: ['2 people', '4 poeple', '6 poeple', '8 or more'] },
}
</script>
