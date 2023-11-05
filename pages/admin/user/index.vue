<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :value="users"
      :paginator="!isLoading"
      show-gridlines
      :rows="10"
      data-key="id"
      filter-display="menu"
      :loading="isLoading"
      :global-filter-fields="['name', 'country.name', 'representative.name', 'balance', 'status']"
    >
      <template #header>
        <div class="flex justify-between">
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Clear"
            outlined
            @click="clearFilter()"
          />
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
          </span>
        </div>
      </template>
      <template v-if="!isLoading" #empty> No customers found. </template>
      <template #loading>
        <ProgressSpinner
          style="width: 26px; height: 26px"
          stroke-width="8"
          animation-duration=".5s"
          aria-label="Custom ProgressSpinner"
      /></template>
      <Column field="name" header="Name" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            type="text"
            class="p-column-filter"
            placeholder="Search by name"
          />
        </template>
      </Column>
      <Column header="Country" filter-field="country.name" style="min-width: 12rem">
        <template #body="{ data }">
          <div class="flex align-items-center gap-2">
            <img
              alt="flag"
              src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`flag flag-${data.country.code}`"
              style="width: 24px"
            />
            <span>{{ data.country.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            type="text"
            class="p-column-filter"
            placeholder="Search by country"
          />
        </template>
        <template #filterclear="{ filterCallback }">
          <Button
            type="button"
            icon="pi pi-times"
            severity="secondary"
            @click="filterCallback()"
          ></Button>
        </template>
        <template #filterapply="{ filterCallback }">
          <Button
            type="button"
            icon="pi pi-check"
            severity="success"
            @click="filterCallback()"
          ></Button>
        </template>
        <template #filterfooter>
          <div class="px-3 pt-0 pb-3 text-center">Customized Buttons</div>
        </template>
      </Column>
      <Column
        header="Agent"
        filter-field="representative"
        :show-filter-match-modes="false"
        :filter-menu-style="{ width: '14rem' }"
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          <div class="flex align-items-center gap-2">
            <img
              :alt="data.representative.name"
              :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
              style="width: 32px"
            />
            <span>{{ data.representative.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <MultiSelect
            v-model="filterModel.value"
            :options="representatives"
            option-label="name"
            placeholder="Any"
            class="p-column-filter"
          >
            <template #option="slotProps">
              <div class="flex align-items-center gap-2">
                <img
                  :alt="slotProps.option.name"
                  :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                  style="width: 32px"
                />
                <span>{{ slotProps.option.name }}</span>
              </div>
            </template>
          </MultiSelect>
        </template>
      </Column>
      <Column header="Date" filter-field="date" data-type="date" style="min-width: 10rem">
        <template #body="{ data }">
          {{ formatDate(data.date) }}
        </template>
        <template #filter="{ filterModel }">
          <Calendar
            v-model="filterModel.value"
            date-format="mm/dd/yy"
            placeholder="mm/dd/yyyy"
            mask="99/99/9999"
          />
        </template>
      </Column>
      <Column header="Balance" filter-field="balance" data-type="numeric" style="min-width: 10rem">
        <template #body="{ data }">
          {{ formatCurrency(data.balance) }}
        </template>
        <template #filter="{ filterModel }">
          <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
        </template>
      </Column>
      <Column
        header="Status"
        field="status"
        :filter-menu-style="{ width: '14rem' }"
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel }">
          <Dropdown
            v-model="filterModel.value"
            :options="statuses"
            placeholder="Select One"
            class="p-column-filter"
            show-clear
          >
            <template #option="slotProps">
              <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
            </template>
          </Dropdown>
        </template>
      </Column>
      <Column
        field="activity"
        header="Activity"
        :show-filter-match-modes="false"
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          <ProgressBar :value="data.activity" :show-value="false" style="height: 6px"></ProgressBar>
        </template>
        <template #filter="{ filterModel }">
          <Slider v-model="filterModel.value" range class="m-3"></Slider>
          <div class="flex align-items-center justify-content-between px-2">
            <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
            <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
          </div>
        </template>
      </Column>
      <Column
        field="verified"
        header="Verified"
        data-type="boolean"
        body-class="text-center"
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          <Button @click="showModalEdit(data)">
            <i
              class="pi"
              :class="{
                'pi-check-circle text-green-500 ': data.verified,
                'pi-times-circle text-red-500': !data.verified
              }"
            ></i>
          </Button>
        </template>
        <template #filter="{ filterModel }">
          <label for="verified-filter" class="font-bold"> Verified </label>
          <TriStateCheckbox v-model="filterModel.value" input-id="verified-filter" />
        </template>
      </Column>
    </DataTable>

    <DynamicDialog />
  </div>
</template>

<script setup lang="ts">
import { FilterMatchMode, FilterOperator } from 'primevue/api'
import { UserService } from '~/services/user'
import { useDialog } from 'primevue/usedialog'
import Login from '~/pages/login/index.vue'

/** @Define */
const representatives = ref([
  { name: 'Amy Elsner', image: 'amyelsner.png' },
  { name: 'Anna Fali', image: 'annafali.png' },
  { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
  { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
  { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
  { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
  { name: 'Onyama Limba', image: 'onyamalimba.png' },
  { name: 'Stephen Shaw', image: 'stephenshaw.png' },
  { name: 'XuXue Feng', image: 'xuxuefeng.png' }
])
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'])
const { data: users, isLoading } = UserService.useUsers()
const dialog = useDialog()

/** @Filter */
const filters = ref()

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
    },
    'country.name': {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
    },
    balance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
    },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
    },
    activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  }
}

const clearFilter = () => {
  initFilters()
}

initFilters()

/** @Format */
const formatDate = (value: any) => {
  return value
}
const formatCurrency = (value: any) => {
  return value
}

const getSeverity = (status: any) => {
  switch (status) {
    case 'unqualified':
      return 'danger'

    case 'qualified':
      return 'success'

    case 'new':
      return 'info'

    case 'negotiation':
      return 'warning'

    case 'renewal':
      return ''
    default:
      return ''
  }
}

const showModalEdit = (data: any) => {
  dialog.open(Login, {
    props: {
      style: {
        width: '50vw'
      },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      modal: true
    },
    data,
    onClose: (op: any) => {
      console.log(op)
    }
  })
}
</script>
