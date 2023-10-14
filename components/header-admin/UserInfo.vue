<template>
  <img
    class="w-8 h-8 rounded-full bg-gray-50"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
    alt=""
  />

  <Skeleton v-if="false" shape="circle" size="2rem" class="!mb-0"></Skeleton>
  <span class="hidden xl:flex xl:items-center">
    <span class="ml-4 leading-6 text-sm font-semibold text-gray-900" aria-hidden="true">
      {{ userStore.lastName }}
      <Skeleton v-if="!userStore.lastName" width="8rem" height="1.5rem" class="!mb-0"></Skeleton>
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      class="w-5 h-5 ml-2 text-gray-400"
    >
      <path
        fill-rule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
</script>
