<template>
  <form>
      <textarea
      placeholder="Type Message"
      v-model="message"
      @keypress.enter.prevent="handleForm"
      ></textarea>
      <div class="error">
          {{error}}
      </div>
      <button @click.prevent="handleForm">Send</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timeStamp } from '../firebase/config'

export default {
    setup() {
        const { user } = getUser()
        const {error, addDoc} = useCollection('messages')

        const message = ref('')

        const handleForm = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timeStamp()
            }

            await addDoc(chat)
            if(!error.value) {
                message.value = ''
            }
        }

        return {message, handleForm}
    }
}
</script>

<style scoped>
    form {
        margin: 10px;
    }
    textarea {
        width: 100%;
        max-width: 100%;
        margin-top: 20px;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-bottom: 1px solid #ddd;
        border-radius: 20px;
        font-family: inherit;
        outline: 0;
    }
    form button {
        margin: 10px;
    }

</style>