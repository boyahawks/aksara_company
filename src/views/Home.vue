<template>
  <div class="home">
    <Navbar />
    <Home />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Home from '../components/Home.vue';

export default {
  name: 'home-page',
  components: {
    Navbar,
    Footer,
    Home,
  }
}
</script>
