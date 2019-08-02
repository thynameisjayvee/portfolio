<template>
  <div class="base">
    <div id="home" class="home">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mr-auto">
            <div class="greeting">
              <h1>
                <span class="text-wrapper">
                  <span class="letter">
                    An Aspiring Fullstack Web Developer<br>
                    In the Making
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <div class="quote">
              <h1>
                <i>"You are never too young to lead, and too old to learn"</i>
              </h1>
              <h2>
                - Kofi Annan
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About></About>
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/views/About.vue'

export default {
  name: 'home',
  components: {
    About,
  }
}
</script>

<style lang="scss" scoped>
  .quote {
    color: #dbdbdb;
    text-shadow: 1px 1px #000;
    text-align: right;
  }
</style>

