<template>
  <div class="welcome container">
    <p>Lex's Chatroom</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <login-form @login="enterChat"></login-form>
      <p>No account yet? <span @click="showLogin = false">Sign up</span></p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <signup-form @signup="enterChat"></signup-form>
      <p>Already registered ? <span @click="showLogin = true">Log in</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return {showLogin, enterChat}
  }

}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  .welcome form {
    width: 300px;
    margin: 20px  auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  .welcome button {
    margin: 20px auto;
  }

</style>