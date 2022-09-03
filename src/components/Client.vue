<template>
  <div class="client">
    <div class="col-lg-12">
      <div class="line1" id="line1">
        <div class="row">
          <div
            class="
              col-lg-6
              animate__animated animate__lightSpeedInLeft animate__delay-1s
            "
          >
            <div class="sub1 text-center">
              <img src="../assets/card/card16.png" alt="" />
            </div>
          </div>
          <div
            class="
              col-lg-6
              animate__animated animate__lightSpeedInRight animate__delay-2s
            "
          >
            <div class="sub2">
              <h1>
                <span style="color: white">Mengenal Klient</span
                >&nbsp;<span style="color: #bf7300">Kami</span>
              </h1>
              <p>
                PT Aksara Meraki Nusantara telah bekerja sama dengan Mitra-Mitra
                dalam memberikan solusi dalam bidang IT (Information Technology)
                terkait kebutuhan Mitra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="line2" id="line2">
        <carousel  :autoplay="true" :nav="false" :margin-left = 5>
          <img src="../assets/client/amaraja.jpg" />
          <img src="../assets/client/goodday.jpg" />
          <img src="../assets/client/imigrasi.jpg" />
          <img src="../assets/client/keccikupa.jpg" />
          <img src="../assets/client/xtro.jpg" />
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Client",
  components: { carousel },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
