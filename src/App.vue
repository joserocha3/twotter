<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">Twoter</div>
      </router-link>
      <div v-if="user" class="navigation__user">{{ user.username }}</div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  // composition API
  setup() {
    const store = useStore()
    const user = computed(() => store.state.User.user)

    return {
      user,
    }
  },
  // old API
  // data() {
  //   return {
  //     user: {
  //       username: '_PabloRocha',
  //     },
  //   }
  // },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: white;

    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>
