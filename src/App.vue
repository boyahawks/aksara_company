<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:wght@500&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  color: #2c3e50;
  width: 100%;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.row {
  width: 97%;
}


</style>
