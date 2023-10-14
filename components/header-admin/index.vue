<template>
  <Block class="px-4 shadow sticky top-0 z-40 h-16 flex items-center border-b md:px-6 xl:px-8">
    <Block class="flex flex-1 gap-x-4 items-stretch xl:gap-x-6">
      <Block class="flex-1"></Block>
      <Block class="flex items-center gap-x-4 xl:gap-x-6">
        <button type="button" class="m-[-0.625rem] p-[0.625rem] text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            ></path>
          </svg>
        </button>
        <Block class="hidden xl:block xl:h-6 xl:w-px xl:bg-[#1118271a]" aria-hidden="true"></Block>
        <TieredMenu />
      </Block>
    </Block>
  </Block>
</template>

<script setup lang="ts">
import TieredMenu from './TieredMenu.vue'
</script>
