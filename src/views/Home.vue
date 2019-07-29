<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Navbar class="black">
      <NavbarItem>WOOOOOO</NavbarItem>
    </Navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import NavbarItem from '@/components/Navbar/NavbarItem.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    NavbarItem
  }
}
</script>

<style lang="scss" scoped>
</style>

