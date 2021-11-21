<template>
  <div class="hello">
    <router-link to="/login">Login</router-link> |
    <router-link to="/contactus">Contact Us</router-link> |
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
// import Vue from "vue";

export default {
  name:'header',
  components: {},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 50%;
  margin: auto;
  align-items: center;
}

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
#app {
  text-align: center;
}
div {
  padding-bottom: 3%;
  color: gray;
}
</style>
