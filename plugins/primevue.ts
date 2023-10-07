import PrimeVue from 'primevue/config'
import Tailwind from 'primevue/passthrough/tailwind'
import Panel from 'primevue/panel'
import Button from 'primevue/button'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { unstyled: true, pt: Tailwind })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Panel', Panel)
})
