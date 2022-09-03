<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-light" :class="navbarSticky">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/logo/logo-aksara.png" alt="" height="60"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="link nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/service" class="link nav-link"
                >Our Service</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/client" class="link nav-link">Client</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="link nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="link nav-link">Portfolio</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <div class="contact">
              <router-link to="/contact" class="link nav-link"
                ><h5 class="text-center">Contact Us</h5></router-link
              >
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarSticky: "",
      scroll: null,
      langIna: "",
      langEng: "hidden",
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      this.scroll = window.scrollY;
      var w = window.innerWidth;
      console.log(w);
      if (w == 1344 || w == 1440 || w == 1536) {
        if (this.scroll >= 50) {
          this.navbarSticky = "navbar-fixed-top";
        } else {
          this.navbarSticky = "";
        }
        // eslint-disable-next-line no-constant-condition
      } else if (w == 240 || w == 320 || w == 480 || w == 640 || w == 720 || 800) {
        if (this.scroll >= 10) {
          this.navbarSticky = "navbar-fixed-top";
        } else {
          this.navbarSticky = "";
        }
      }
    },
    englishlang() {
      this.langIna = "hidden";
      this.langEng = "";
    },
    inalang() {
      this.langIna = "";
      this.langEng = "hidden";
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 100%;
  height: 100px;
}
.nav-link span {
  text-decoration: none;
}
.link {
  text-decoration: none;
}

a.link.nav-link.active.router-link-active {
  color: blue;
}
.contact h5 {
  cursor: pointer;
}
</style>
