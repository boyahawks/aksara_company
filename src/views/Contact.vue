<template>
  <div class="contact">
    <Navbar />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'home-page',
  components: {
    Navbar,
    Footer,
    Contact,
  }
}
</script>
