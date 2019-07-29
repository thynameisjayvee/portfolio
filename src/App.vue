<template>
  <div id="app">
    <Navbar>
      <!-- <template v-slot:nav_brand> -->
        <NavBrand>
          <router-link :to="{ name: 'home' }">Portfolio</router-link>
        </NavBrand>
      <!-- </template> -->
      <template v-slot:nav_item>
        <NavbarItem class="active">
          <a href="#home">Home</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about">About</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#services">Services</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#portfolio">Portfolio</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact">Contact</a>
        </NavbarItem>
      </template>
    </Navbar>
    <div id="nav">  
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar/Navbar.vue'
import NavbarItem from '@/components/Navbar/NavbarItem.vue'
import NavBrand from '@/components/Navbar/NavBrand.vue'

export default {
  components : {
    Navbar,
    NavbarItem,
    NavBrand
  },
  data : function() {
    return {
      navLink: `{ name: 'about' }`
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
