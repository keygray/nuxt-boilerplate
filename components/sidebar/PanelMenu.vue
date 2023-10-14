<script setup lang="ts">
import { MenuItem } from 'primevue/menuitem'
import PanelMenu from 'primevue/panelmenu'
import { panelMenuConfig } from '~/config'

/** @Define */
const expandedKeys = ref({})
const items = ref(panelMenuConfig)

/** @Composable */
const { currentRoute } = useRouter()

const matchedPath = (item: MenuItem) => currentRoute.value.fullPath !== item.url

/** @Effect */
watch(
  () => currentRoute.value.fullPath,
  (fullPath) => {
    const keyLevels = SideBarUtils.findKeysByURL(items.value, fullPath)
    expandedKeys.value = { ...expandedKeys.value, ...SideBarUtils.arrayToBooleanObject(keyLevels) }
  },
  { immediate: true }
)
</script>

<template>
  <nav class="flex flex-auto flex-col">
    <ul class="flex flex-auto flex-col gap-7">
      <li>
        <PanelMenu
          v-model:expanded-keys="expandedKeys"
          :model="items"
          :pt="{
            root: 'mx-[-0.5rem] sidebar relative',
            header: 'outline-0',
            headercontent: '',
            menucontent: 'border-0',
            content: ''
          }"
        >
          <template #item="{ item }">
            <NuxtLink
              :to="item.url"
              class="text-gray-400 cursor-pointer flex gap-x-3 rounded-md p-2 relative text-sm font-semibold leading-6 header-link"
              :class="{
                'hover:text-white sidebar-item': matchedPath(item)
              }"
              active-class="!text-white bg-gray-800"
            >
              <span class="pi pi-fw pi-pencil mr-2"></span>
              <span>{{ item.label }}</span>
              <svg
                v-if="item.items"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="p-icon absolute top-1/2 right-2 translate-y-[-50%] toggle-ic"
                aria-hidden="true"
              >
                <path
                  d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
                  fill="currentColor"
                ></path>
              </svg>
            </NuxtLink>
          </template>
        </PanelMenu>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.sidebar {
  [aria-expanded='true'] > div > .sidebar-item {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));

    & > .toggle-ic {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
        skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
        scaleY(var(--tw-scale-y)) rotate(90deg);
    }
  }

  li > div > .sidebar-item {
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
    padding-left: 1rem;

    & > .toggle-ic {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  .toggle-ic {
    transition:
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.3s;
  }
}
</style>
