<template>
  <div class="Portfolio">
    <Navbar />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Portfolio from '../components/Portfolio.vue';

export default {
  name: 'Portfolio-page',
  components: {
    Navbar,
    Footer,
    Portfolio,
  }
}
</script>
