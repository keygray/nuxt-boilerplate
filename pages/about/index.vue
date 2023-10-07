<template>
  <div class="mt-10">
    <h1>About</h1>
    <span class="mr-20">Count in store: {{ store.count }}</span>
    <Button :label="'Increment'" @click.prevent="store.increment" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()
</script>
