<template>
  <Block
    class="px-6 flex flex-col flex-grow-1 gap-y-5 fixed inset-y-0 w-72 border-r border-gray-200 bg-gray-900"
  >
    <Logo />
    <PanelMenu />
  </Block>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import PanelMenu from './PanelMenu.vue'
</script>
