import PrimeVue from 'primevue/config'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import ProgressSpinner from 'primevue/progressspinner'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Slider from 'primevue/slider'
import Tag from 'primevue/tag'
import TriStateCheckbox from 'primevue/tristatecheckbox'
import ProgressBar from 'primevue/progressbar'
import InputNumber from 'primevue/inputnumber'
import Column from 'primevue/column'
import Badge from 'primevue/badge'
import DynamicDialog from 'primevue/dynamicdialog'
import DialogService from 'primevue/dialogservice'
import InlineMessage from 'primevue/inlinemessage'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripped: true })

  /** @Form */
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('InputNumber', InputNumber)
  nuxtApp.vueApp.component('MultiSelect', MultiSelect)
  nuxtApp.vueApp.component('Calendar', Calendar)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('TriStateCheckbox', TriStateCheckbox)
  nuxtApp.vueApp.component('InlineMessage', InlineMessage)

  /** @Process */
  nuxtApp.vueApp.component('ProgressBar', ProgressBar)
  nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)

  /** @Table */
  nuxtApp.vueApp.component('DataTable', DataTable)
  nuxtApp.vueApp.component('Column', Column)

  /** @Common */
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('Badge', Badge)
  nuxtApp.vueApp.component('Tag', Tag)
  nuxtApp.vueApp.component('Slider', Slider)

  /** @Dialog */
  nuxtApp.vueApp.component('DynamicDialog', DynamicDialog)
  nuxtApp.vueApp.use(DialogService)
})
