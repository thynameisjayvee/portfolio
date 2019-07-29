<template>
  <div class="home">
    <Navbar>
      <NavbarItem>WOOOOOO</NavbarItem>
    </Navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar/Navbar.vue'
import NavbarItem from '@/components/Navbar/NavbarItem.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    NavbarItem
  }
}
</script>

<style lang="scss" scoped>
</style>

