<template>
    <div class="container">
        <navbar></navbar>
        <chat-window></chat-window>
        <new-chatform></new-chatform>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
import { watch } from 'vue'
import NewChatform from '../components/NewChatform.vue'
import ChatWindow from '../components/chatWindow.vue'

export default {
  components: { Navbar, NewChatform, ChatWindow },
  setup() {
   
        const router = useRouter()

        const {user} = getUser()
        watch(user, () => {
            if(!user.value) {
              router.push({name: 'Home'})
            }
        })
  }

}
</script>

<style>

</style>