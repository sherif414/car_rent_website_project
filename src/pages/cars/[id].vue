<template>
  <main class="grid justify-center bg-main">
    <div class="grid grid-cols-12 gap-x-8 max-w-1400px w-full pt16 px-8">
      <section class="grid grid-cols-6 gap-8 h-max col-span-full mt-8">
        <!-- showcase image grid -->
        <div class="col-span-3 grid gap-y-4 grid-rows-4">
          <div
            class="grid row-span-3 rounded-10px"
            :class="previewImg"
          ></div>
          <ul class="grid grid-cols-3 gap-x-4 row-span-1">
            <li
              class="background-img flex py8 bg-primary-500 rounded-10px"
              :class="{ 'img-outline': imgSrc === carData.imgUrl }"
            >
              <img
                class="w75% mx-auto"
                @click="imgSrc = carData.imgUrl"
                :src="carData.imgUrl"
                :alt="`an Image of ${carData.name}`"
              />
            </li>
            <li
              @click="imgSrc = previewImg1"
              class="preview-img-2"
              :class="{ 'img-outline': imgSrc === previewImg1 }"
            ></li>
            <li
              @click="imgSrc = previewImg2"
              class="preview-img-3"
              :class="{ 'img-outline': imgSrc === previewImg2 }"
            ></li>
          </ul>
        </div>
        <!-- car info -->
        <article class="col-span-3 flex flex-col justify-center bg-white p-8 gap-y-8 rounded-10px">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-6 font-bold">{{ carData?.name }}</h1>
              <IStars class="w20" />
            </div>
            <IHeart class="[&>*]:fill-red" />
          </div>
          <p class="text-secondary-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eum repellat, ipsum cum qui tenetur
            praesentium debitis corporis a neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            beatae!
          </p>
          <ul class="grid justify-between items-center text-secondary-400">
            <li><span class="text-secondary-300">Type:</span> {{ carData?.type }}</li>
            <li><span class="text-secondary-300">Capacity:</span> {{ carData?.capacity }} People</li>
            <li><span class="text-secondary-300">Gear:</span> {{ carData?.gear }}</li>
            <li><span class="text-secondary-300">Gas:</span> {{ carData?.gas }}L</li>
          </ul>
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-5 font-bold">${{ carData?.price }}.00/day</h2>
              <h3 class="text-3 text-secondary-300 line-through">$110.00</h3>
            </div>
            <button class="px4 py-2 bg-primary-500 text-white rounded-2">Rent Now</button>
          </div>
        </article>

        <!-- Testmonials -->
        <section class="my-8 p-6 bg-white rounded-10px col-span-6 flex flex-col gap-y-8">
          <h2 class="font-bold text-5">Reviews</h2>
          <article
            v-for="i in 2"
            class="flex items-center"
          >
            <div class="overflow-hidden w-16 rounded-50% self-start mr4">
              <img
                src="/src/assets/img/kachan.jpg"
                alt="kacchan img"
              />
            </div>
            <div>
              <div class="flex justify-between items-center">
                <div>
                  <h2 class="text-4 font-bold">{{ i === 2 ? 'Jane Doe' : 'Jhon Doe' }}</h2>
                  <h3 class="text-secondary-300 text-3">CEO at Amazon</h3>
                </div>
                <IStars />
              </div>
              <p class="text-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae facilis voluptates officiis, animi
                earum doloribus excepturi. Rerum aperiam atque at placeat omnis eius sapiente dolor, in pariatur,
                perspiciatis similique aut?
              </p>
            </div>
          </article>
          <h4 class="text-center text-primary-500">show more</h4>
        </section>
        <section class="col-span-full grid grid-cols-4 gap-4 mb-8">
          <CardShowcase
            v-for="car in carGird"
            :id="car.id"
            :name="car.name"
            :price="car.price"
            :type="car.type"
            :gas="car.gas"
            :gear="car.gear"
            :capacity="car.capacity"
            :imgUrl="car.imgUrl"
          />
        </section>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import data from '~/services'

let carGird = data.slice(0, 8)
let route = useRoute()
const carData = $computed(() => {
  return data.find((el) => route.params.id === el.id.toString()) ?? data[0]
})

// img preview
let imgSrc = $ref<string>(carData.imgUrl)

const previewImg1 = '~/assets/img/car_inside3.jpg'
const previewImg2 = '~/assets/img/car_inside_2.png'

let previewImg = $computed(() => {
  return {
    'preview-img-1': imgSrc === carData.imgUrl,
    'preview-img-2': imgSrc === previewImg1,
    'preview-img-3': imgSrc === previewImg2,
  }
})
let carImg = $computed(() => {
  return `url(${carData.previewImgUrl})`
})
</script>

<style scoped>
.preview-img-1 {
  background-image: v-bind(carImg);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}
.preview-img-2 {
  background-image: url('~/assets/img/car_inside_1.jpg');
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.preview-img-3 {
  background-image: url('~/assets/img/car_inside_2.jpg');
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}

.img-outline {
  outline-width: 2px;
  outline-color: rgba(53, 99, 233);
  outline-style: outset;
  outline-offset: 4px;
}
</style>
