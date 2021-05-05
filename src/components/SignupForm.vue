<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Username" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <div class="error">{{error}}</div>
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
    setup(props, context) {
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if(!error.value) {
                context.emit('signup')
            }
        }

        const {error, signup} = useSignup()


        return {displayName, email, password, handleSubmit, error}
    }

}
</script>

<style>

</style>