<template>
  <div class="hello">
    <p><router-link to="/contactus">Contact Us</router-link> @WAD 2021</p>
  </div>
</template>

<script>
// import Vue from "vue";

export default {
  name:'footer',
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
a,p {
  color: #42b983;
}
div {
  margin-bottom: 3%;
  margin-top: 5%;
}
</style>
