<template>
  <div>
    <div class="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:w-72">
      <Sidebar />
    </div>
    <div class="px-10 xl:pl-72 xl:pr-0">
      <HeaderAdmin />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
