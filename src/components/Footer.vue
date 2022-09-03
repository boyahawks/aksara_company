<template>
  <div class="footer">
    <div class="row">
      <div class="col-lg-6">
        <div class="sub1">
          <h1>Tentang Kami</h1>
          <p>
            PT Aksara Meraki Nusantara senantiasa memberikan pelayanan yang
            berkualitas dalam menjawab kebutuhan-kebutuhan para Mitra sebagai
            wujud terlaksanakannya komitmen kami dalam praktek kerjasama dengan
            Mitra. Dengan komitmen ini, menjadi kunci yang menekankan perusahaan
            terhadap pelayanan yang diberikan terhadap Mitra PT Aksara Meraki
            Nusantara untuk mendukung kemajuan perusahaan di masa mendatang.
          </p>
          <!-- <div class="row">
            <div class="col-2">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div class="col-2">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </div>
            <div class="col-2">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div class="col-2">
              <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </div>
          </div> -->
        </div>
      </div>
      <div class="col-lg-6">
        <div class="sub2">
          <h1>Hubungi Kami</h1>
          <div class="content">
            <div class="row line">
              <div class="col-1 text-center">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="col-11">
                <p>
                  Jl. Rawa Kopi II Pangkalan Jati, Pondok Labu, Lebak Bulus,
                  Jakarta Selatan 16515
                </p>
              </div>
            </div>
            <div class="row line">
              <div class="col-1 text-center">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="col-11">
                <p @click="copyText(telpon = '0896321546521')">0896321546521</p>
              </div>
            </div>
            <div class="row line">
              <div class="col-1 text-center">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="col-11">
                <p @click="copyText(email = 'info@aksaramerakinusantara.com')">info@aksaramerakinusantara.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="footer-info text-center">
          <p>© 2022 AMN - PT. Aksara Meraki Nusantara. All rights reserved</p>
        </div>
      </div>
      <div class="menu-top" :class="fixedBottom">
        <a href="#line1"
          ><img src="../assets/logo/scroll.png" alt="" width="auto" height="50"
        /></a>
        <div class="kontakMe">
          <div class="pilihanKontak" :class="pilihanMenu">
            <ul>
              <li class="text1">
                <a
                  href="https://api.whatsapp.com/send?phone=6282210904012"
                  class="btn btn-success"
                  style="background: green"
                  target="_BLANK"
                  ><i class="fa fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;<span
                    >WHATSAPP</span
                  ></a
                >
              </li>
              <li class="text2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aksaramerakinusantara.com&su=subject_here&body=body_here"
                  class="btn btn-danger"
                  style="background: red"
                  target="_BLANK"
                  ><i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;<span
                    >GMAIL</span
                  ></a
                >
              </li>
            </ul>
          </div>
          <div class="buttonKontak">
            <ul>
              <li
                class="btn btn-light"
                :class="buttonMenuShow"
                style="
                  background: #f89500;
                  color: white;
                  margin: 0px 25px 0px 0px;
                "
                v-on:click="tampilkanMenu()"
              >
                <i class="fa fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;<span
                  >HUBUNGI KAMI</span
                >
              </li>
              <li>
                <a
                  class="btn btn-light"
                  :class="buttonMenuDrop"
                  style="text-align: center; margin: 0px 25px 0px 0px"
                  v-on:click="dropMenu()"
                  ><i class="fa fa-times-circle" style="font-size: 25px"></i
                  ><span></span
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      fixedBottom: "hidden",
      pilihanMenu: "hidden",
      buttonMenuShow: "",
      buttonMenuDrop: "hidden",
      // pesanWa: "Hallo%20PT.Aksara Meraki Nusantara%20team..%0ASaya%20ada%20pertanyaan,%20apa%20bisa%20dibantu?",
      pesanWa: "selamat pagi",
      status: 0,
      scroll: null,
    };
  },
  created(){
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      this.scroll = window.scrollY;
      var w = window.innerWidth;

      if (w == 1344 || w == 1440 || w == 1536) {
        if (this.scroll >= 80) {
          this.fixedBottom = "";
        } else {
          this.fixedBottom = "hidden";
        }
      // eslint-disable-next-line no-constant-condition
      } else if (w == 240 || w == 320 || w == 480 || w == 640 || w == 720 || 800) {
        if (this.scroll >= 10) {
          this.fixedBottom = "";
        }else {
          this.fixedBottom = "hidden";
        }
      }


    },
    tampilkanMenu() {
      this.status = 1;
      if (this.status == 1) {
        this.pilihanMenu = "animate__animated animate__backInRight";
        this.buttonMenuDrop = "animate__animated animate__backInRight";
        this.buttonMenuShow = "hidden";
      }
    },
    dropMenu() {
      this.status = 0;
      if (this.status == 0) {
        this.pilihanMenu = "hidden";
        this.buttonMenuDrop = "hidden";
        this.buttonMenuShow = "";
      }
    },
    copyText(val) {
      var text = val;
      text.select();
      document.execCommand("copy");
      alert("Berhasil di copy");
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>


<style scoped>
.hidden {
  display: none;
}
</style>
