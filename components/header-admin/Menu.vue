<template>
  <Block class="relative">
    <button
      id="headless-menu-button-1"
      class="m-[-0.375rem] p-[0.375rem] flex items-center"
      type="button"
      aria-haspopup="true"
      aria-controls="overlay_tmenu"
      @click="toggleMenu"
    >
      <UserInfo />
    </button>

    <Menu
      ref="menu"
      popup
      :model="items"
      :pt="{
        separator: 'border-t border-[#dee2e6] my-1',
        label: 'text-sm',
        action: 'px-4 py-2 flex items-center cursor-pointer'
      }"
    >
      <template #item="{ item, label, props }">
        <a class="flex" v-bind="props.action">
          <span v-bind="props.icon" />
          <span v-bind="props.label">{{ label }}</span>
          <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        </a>
      </template>
      <template #end>
        <button
          type="button"
          class="w-full text-sm p-link flex cursor-pointer items-center p-2 pl-[1.2rem] text-color hover:surface-200 border-noround"
          @click.prevent="logOut"
        >
          <span class="pi pi-sign-out text-gray-600 dark:text-white/70 mr-2"></span>
          <span>Log Out</span>
        </button>
      </template>
    </Menu>
  </Block>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuItem } from 'primevue/menuitem'
import Menu from 'primevue/menu'
import { useUserStore } from '~/stores/user'
import UserInfo from './UserInfo.vue'

/** @Define */
const menu = ref()
const items = ref<MenuItem[]>([
  {
    label: 'Profile',
    icon: 'pi pi-fw pi-user'
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog'
  },
  { separator: true }
])

/** @Handler */
const toggleMenu = (e: MouseEvent) => {
  menu.value.toggle(e)
}

/** @HandlerUser */
const userStore = useUserStore()
const route = useRouter()

const logOut = () => {
  route.push('/login')
  userStore.$reset()
}
</script>
