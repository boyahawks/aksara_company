<template>
  <div class="service">
    <Navbar />
    <Service />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Service from '../components/Service.vue';

export default {
  name: 'service-page',
  components: {
    Navbar,
    Footer,
    Service,
  }
}
</script>
