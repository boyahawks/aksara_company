<template>
  <div class="client">
    <Navbar />
    <Client />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Client from '../components/Client.vue';

export default {
  name: 'client-page',
  components: {
    Navbar,
    Footer,
    Client,
  }
}
</script>
