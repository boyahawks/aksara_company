<template>
  <div class="contact">
    <div class="col-lg-12">
      <!-- <div class="shape1"></div>
      <div class="shape2"></div> -->
      <div class="line1" id="line1">
        <div class="row">
          <div class="col-lg-6 animate__animated animate__lightSpeedInLeft animate__delay-1s">
            <div class="sub1 text-center">
              <img src="../assets/card/card8.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6 animate__animated animate__lightSpeedInRight animate__delay-2s">
            <div class="sub2">
              <h1>
                <span style="color: white">Tetaplah</span>&nbsp;&nbsp;<span
                  style="color: #f1ad47"
                  >Terhubung</span
                >
              </h1>
              <p>
                PT Aksara Meraki Nusantara merupakan perusahaan yang bergerak
                sebagai penyedia solusi IT (Information Technology) secara
                khusus memberikan pelayanan berupa pembuatan, pengadaan dan
                konsultasi berbagai kebutuhan berkaitan dengan (Information
                Technology).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="line2">
        <div class="row">
          <div class="col-lg-6">
            <div class="sub1">
              <h1>
                <span style="color: rgba(26, 49, 131, 1)">Temukan Kami</span
                >&nbsp;&nbsp;<span style="color: #f1ad47">Disini</span>
              </h1>
              <p>
                Jl. Rawa Kopi II Pangkalan Jati, Pondok Labu, Lebak Bulus,
                Jakarta Selatan 16515
              </p>
            </div>
          </div>
          <!-- <div class="shape3"></div> -->
          <div class="sub2">
            <div class="col-lg-6">
              <GmapMap
                :center="center"
                :zoom="12"
                class="gmapsStyle"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="line3">
        <div class="row">
          <div class="col-lg-6">
            <div class="sub1">
              <img src="../assets/card/card9.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="sub2">
              <div class="rectangle">
                <div class="text-center title">
                  <h1>
                    <span style="color: #1a3183">Terhubung dengan</span
                    >&nbsp;&nbsp;<span style="color: #bf7300">Kami</span>
                  </h1>
                </div>
                <p>
                  Dapatkan berita dan pembaruan tentang layanan perusahaan,
                  produk dan penawaran terkini dari kami. Terhubunglah dengan
                  media sosial kami, agar Anda dapat menjangkau kami dengan
                  lebih cepat dan mudah.
                </p>
                <div class="informasi">
                  <table width="100%" border="0px">
                    <tr>
                      <th class="icon" width="50"><i class="fa fa-phone" aria-hidden="true"></i></th>
                      <th class="deskripsi"><a href="https://api.whatsapp.com/send?phone=6282210904012&text=Hello%2C%20Aksara saya tertarik ingin membuat aplikasi ..." target="_blank">082210904012</a></th>
                    </tr>
                    <tr>
                      <th class="icon" width="50"><i class="fa fa-envelope" aria-hidden="true"></i></th>
                      <th class="deskripsi">aksaramerakinusantara@gmail.com</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="shape4"></div>
      <div class="shape5"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      center: { lat: -6.3245519, lng: 106.7945732 },
      animation1: "",
      animation2: "",
      animation3: "",
      animation4: "",
      animation5: "",
      scroll: null,
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

      if (w == 1344 || w == 1440 || w == 1536) {
        if (this.scroll >= 300) {
          this.animation1 =
            "animate__animated animate__lightSpeedInRight animate__delay-2s";
          this.animation2 =
            "animate__animated animate__zoomInLeft animate__delay-3s";
        }
        if (this.scroll >= 1200) {
          this.animation3 =
            "animate__animated animate__zoomIn animate__delay-2s";
        }
        if (this.scroll >= 2100) {
          this.animation4 =
            "animate__animated animate__zoomInUp animate__delay-2s";
          this.animation5 =
            "animate__animated animate__fadeInBottomRight animate__delay-3s";
        }
        // eslint-disable-next-line no-constant-condition
      } else if (w == 240 || w == 320 || w == 480 || w == 640 || w == 720 || 800 ) {
        if (this.scroll >= 100) {
          this.animation1 =
            "animate__animated animate__fadeInUpBig animate__delay-2s";
        }
        if (this.scroll >= 1500) {
          this.animation2 =
            "animate__animated animate__zoomInUp animate__delay-2s";
        }
        if (this.scroll >= 2100) {
          this.animation3 =
            "animate__animated animate__zoomIn animate__delay-2s";
        }
        if (this.scroll >= 3700) {
          this.animation4 =
            "animate__animated animate__zoomInLeft animate__delay-2s";
        }
        if (this.scroll >= 4000) {
          this.animation5 =
            "animate__animated animate__fadeInUpBig animate__delay-2s";
        }
      }
      console.log(window.scrollY);
      // console.log(w)
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
</style>
