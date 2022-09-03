<template>
  <div class="home">
    <Navbar />
    <About />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import About from '../components/About.vue';

export default {
  name: 'home-page',
  components: {
    Navbar,
    Footer,
    About,
  }
}
</script>
