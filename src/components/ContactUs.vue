<template>
  <div class="hello">
    <h1>CONTACT US</h1>
    <h3>Team Members OÜ</h3>
    <p> TEL: +372 555-1212 </p>
    <p> EMAIL: wad@wadwad.wad </p>
    <p> ADDRESS: Pudeli 17, 50111 Tartu, Estonia </p>
  </div>
</template>

<script>
// import Vue from "vue";

export default {
  name:'ContactUs',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
