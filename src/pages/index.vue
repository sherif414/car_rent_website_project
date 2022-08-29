<script setup lang="ts"></script>

<template>
  <main class="bg-#F6F7F9">
    <NavBar />

    <!-- top section -->
    <section class="px8 mt8 text-white">
      <!-- advertisement cards -->
      <div class="grid grid-cols-2 gap-x-8">
        <!-- right card -->
        <div class="px4 pt8 pb20 rounded-3 bg-info-500 ad__card--1">
          <h2 class="text-8 w-50%">The Best Platform<br />For Car Rental</h2>
          <p class="w-50%">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button class="w-max px4 py2 rounded-1 bg-primary-500">rental car</button>
        </div>

        <!-- left card -->
        <div class="px4 pt8 pb20 rounded-3 bg-primary-500 ad__card--2">
          <h2 class="text-8 w-50%">Easy way to rent a car at a low price</h2>
          <p class="w-50%">Providing cheap car rental services and safe and comfortable facilities.</p>
          <button class="w-max px4 py2 rounded-1 bg-info-500">rental car</button>
        </div>
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
