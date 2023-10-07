<template>
  <div>
    <h1 class="mt-10">Home</h1>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import { UserService } from '~/services/user'

const { data, refetch } = UserService.useGetMe()

onMounted(() => {
  refetch()
})
</script>
