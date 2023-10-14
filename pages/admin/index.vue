<template>
  <div class="px-20 text-sm divide-slate-800">Home</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth', 'roles'],
  layout: 'admin',
  roles: ['writable', 'read']
})

useHead({
  title: 'Dashboard Manager'
})
</script>
