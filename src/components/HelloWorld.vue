<template>
  <div class="hello">
    <h1>Hello, world!</h1>
    <reset-likes-button></reset-likes-button>
    <br>
    <post />
  </div>
</template>

<script>



import Post from "@/components/Post";
import ResetLikesButton from './ResetLikesButton.vue';
export default {
  name: 'HelloWorld',
  components: {Post, ResetLikesButton},
  props: {
    msg: String
  },
  methods: {
    resetLikes: function() {
    this.$store.commit("resetLikes")
 }
}};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h1 {
  margin-left: 3.1%;
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

<style>
.hello{
  padding-left: 3%;
}
</style>>
