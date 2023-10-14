<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="onSubmit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <InputText
              id="email"
              v-model="email"
              type="text"
              :class="{ 'border-rose-500': errEmail }"
              aria-describedby="text-error"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <Password
              v-model="pwd"
              :feedback="false"
              class="w-full"
              :pt="{
                input:
                  'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }"
              toggle-mask
            />
          </div>
        </div>

        <div>
          <Button
            :disabled="isLoading"
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 !py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span v-if="!isLoading">Sign In</span>
            <ProgressSpinner
              v-if="isLoading"
              style="width: 26px; height: 26px"
              stroke-width="8"
              animation-duration=".5s"
              aria-label="Custom ProgressSpinner"
            />
          </Button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { ILoginQueryParams, UserService } from '~/services/user'
import { useUserStore } from '~/stores/user'

/** @Define */
const { handleSubmit } = useForm<ILoginQueryParams>({
  initialValues: {
    email: 'test@example.com',
    password: 'p@$$w0rd'
  },
  validationSchema: {
    email: yup.string().required(),
    password: yup.string().required().min(8)
  }
})
const { value: email, errorMessage: errEmail } = useField<string>('email')
const { value: pwd } = useField<string>('password')

/** @Handler */
const { isLoading, mutate } = UserService.useLogin()
const userStore = useUserStore()
const router = useRouter()
const onSubmit = handleSubmit((values) => {
  mutate(values, {
    onSuccess: (data) => {
      userStore.$patch(data)
      router.push('/admin')
    }
  })
})

definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'Login Admin'
})
</script>
