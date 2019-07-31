<template>
  <div id="app">
    <Navbar>
      <!-- <template v-slot:nav_brand> -->
        <NavBrand>
          <a href="#">JAYVEE</a>
        </NavBrand>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <!-- </template> -->
      <template v-slot:nav_item>
        <NavbarItem>
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
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar/Navbar.vue'
import NavbarItem from '@/components/Navbar/NavbarItem.vue'
import NavBrand from '@/components/Navbar/NavBrand.vue'
// import jQuery from 'jquery'

export default {
  components : {
    Navbar,
    NavbarItem,
    NavBrand
  },
  mounted() {
    jQuery(function($){
      // Highlight Link method
      let url = window.location.href
      let stripUrl = url.replace(window.location.origin + '/', '');
      if (url === window.location.origin || url === window.location.origin + '/' || stripUrl === '#home' ) {
        $(".nav-link a[href='#home']").parent().addClass('active')
      } else {
        $(".nav-link a[href='"+ stripUrl +"']").parent().addClass('active')
      }
    
      $('.nav-link a').click(function(){
        $('.nav-link a').parent().removeClass('active');
        $(this).parent().addClass('active');
      });

      // Screen Resize]
      $('.home').height($(window).height() - $('.navbar').outerHeight());
      $( window ).resize(function() {
        console.log($('.navbar').outerHeight())
        $('.home').height($(window).height() - $('.navbar').outerHeight());
      });
    })
  }
}
</script>

<style lang="scss">
@import '/assets/scss/style.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
