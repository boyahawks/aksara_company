<template>
  <div class="portfolio">
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
        <carousel :autoplay="true" :nav="false" :margin-left = 5>
          <div class="sub1" v-for="items in items" :key="items.id">
            <img :src="items.url" alt="" @click="toggleModal(items.id)" />
            <p>{{ items.judul }}</p>
            <p>{{ items.tanggal }}</p>
          </div>
        </carousel>
      </div>
    </div>
    <!-- Modal -->
    <div
      ref="modal"
      class="modal fade"
      :class="{ show, 'd-block': active }"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">DETAIL PORTFOLIO</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="toggleModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-for="detil in detil" :key="detil.id">
            <div class="row">
              <div class="col-lg-6 deskripsiModal">
                <p>{{ detil.id }}</p>
                <p>{{ detil.judul }}</p>
                <p>{{ detil.tanggal }}</p>
              </div>
              <div class="col-lg-6 gambarModal">
                  <img :src="detil.url" alt="">
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "portfolio",
  components: { carousel },
  data() {
    return {
      active: false,
      show: false,
      items: [
        {
          id: "1",
          url: require("../assets/vector/vector1.png"),
          judul: "Lorem Ipsum",
          tanggal: "26-03-2022 | 20:25",
        },
        {
          id: "2",
          url: require("../assets/vector/vector1.png"),
          judul: "Lorem Ipsum",
          tanggal: "26-03-2022 | 20:25",
        },
        {
          id: "3",
          url: require("../assets/vector/vector1.png"),
          judul: "Lorem Ipsum",
          tanggal: "26-03-2022 | 20:25",
        },
        {
          id: "4",
          url: require("../assets/vector/vector1.png"),
          judul: "Lorem Ipsum",
          tanggal: "26-03-2022 | 20:25",
        },
      ],
      detil: [],
    };
  },

  methods: {
    toggleModal(id) {
      var data = [];
      this.items.forEach((value) => {
        if (value["id"] == id) {
          var getData = {
            id: value["id"],
            url: value["url"],
            judul: value["judul"],
            tanggal: value["tanggal"],
          };
          data.push(getData);
        }
      });
      this.detil = data;
      const body = document.querySelector("body");
      this.active = !this.active;
      this.active
        ? body.classList.add("modal-open")
        : body.classList.remove("modal-open");
      setTimeout(() => (this.show = !this.show), 10);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gambarModal img {
  height: 250px;
  width: auto;
}
</style>
