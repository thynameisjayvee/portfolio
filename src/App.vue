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
    <main>
      <router-view/>
    </main>
    <footer></footer>
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
    // text animation
    var textWrapper = document.querySelector('.greeting h1 .letter');
    // eslint-disable-next-line
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    // eslint-disable-next-line
    anime.timeline({loop: true})
      .add({
        targets: '.greeting h1 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: function(el, i) {
          return 45 * i;
        }
      }).add({
        targets: '.greeting h1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

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
        $('.home').height($(window).height() - $('.navbar').outerHeight());
      });

      //smooth scrolling
      $('.navbar_nav-item a').click(function(e){
        var jump = $(this).attr('href');
        console.log(jump)
        var new_position = $(jump).offset();
        $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
        e.preventDefault();
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
