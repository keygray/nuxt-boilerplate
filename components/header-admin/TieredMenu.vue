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

    <TieredMenu id="overlay_tmenu" ref="menu" popup :model="items" />
  </Block>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuItem } from 'primevue/menuitem'
import TieredMenu from 'primevue/tieredmenu'
import { useUserStore } from '~/stores/user'
import UserInfo from './UserInfo.vue'

/** @Define */
const menu = ref()
const userStore = useUserStore()
const route = useRouter()

const items = ref<MenuItem[]>([
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark'
          },
          {
            label: 'Video',
            icon: 'pi pi-fw pi-video'
          }
        ]
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      },
      {
        separator: true
      },
      {
        label: 'Export',
        icon: 'pi pi-fw pi-external-link'
      }
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'Left',
        icon: 'pi pi-fw pi-align-left'
      },
      {
        label: 'Right',
        icon: 'pi pi-fw pi-align-right'
      },
      {
        label: 'Center',
        icon: 'pi pi-fw pi-align-center'
      },
      {
        label: 'Justify',
        icon: 'pi pi-fw pi-align-justify'
      }
    ]
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus'
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus'
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Print',
                icon: 'pi pi-fw pi-print'
              }
            ]
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'List'
          }
        ]
      }
    ]
  },
  {
    label: 'Events',
    icon: 'pi pi-fw pi-calendar',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      },
      {
        label: 'Archieve',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
  },
  {
    separator: true
  },
  {
    label: 'Log out',
    icon: 'pi pi-fw pi-power-off',
    command: () => {
      userStore.$reset()
      route.push('/login')
    }
  }
])

/** @Handler */
const toggleMenu = (e: MouseEvent) => {
  menu.value.toggle(e)
}
</script>
