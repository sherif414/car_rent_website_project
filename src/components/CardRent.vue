<template>
  <div class="grow flex flex-col justify-between px8 py4 bg-white border rounded-3">
    <!-- title -->
    <h3 class="font-semibold mb-2 flex items-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        class="mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="16"
          height="16"
          rx="8"
          fill="#3563E9"
          fill-opacity="0.3"
        />
        <circle
          cx="8"
          cy="8"
          r="4"
          fill="#3563E9"
        />
      </svg>
      {{ title }}
    </h3>

    <!-- second row -->
    <div
      class="flex justify-between [&_h4]:font-bold [&_span]:(font-medium text-3 text-secondary-300) [&>div]:grow gap-x-4"
    >
      <!-- column one -->
      <div class="border-r">
        <h4>Locations</h4>
        <span class="flex gap-x-8">
          select your city
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
              fill="#1A202C"
              stroke="#1A202C"
              stroke-width="0.5"
            />
          </svg>
        </span>
      </div>

      <!-- column two -->
      <div class="border-r">
        <h4>Date</h4>
        <span class="flex gap-x-8">
          select your date
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
              fill="#1A202C"
              stroke="#1A202C"
              stroke-width="0.5"
            />
          </svg>
        </span>
      </div>

      <!-- column three -->
      <div>
        <h4>Time</h4>
        <span class="flex gap-x-8">
          select your time
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
              fill="#1A202C"
              stroke="#1A202C"
              stroke-width="0.5"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
