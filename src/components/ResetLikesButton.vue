<template>
    <div>
        <button id="resetId" v-on:click="resetLikes">Reset likes</button>
    </div>
</template>


<script>

  export default {
  name: "resetLikes",
  data: function () {
    return {
      likes: 0
    };
  },
  methods: {
    resetLikes: function() {
      this.$store.state.postList.forEach(post => {
      post.likes = 0;
 });
 }}};

</script>

<style scoped>
.div {
  width: 30;
  height: 30;
}
button {
  float: right;
  margin-right: 10%;
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 20px;
  border: solid rgb(206, 65, 65);
  background-color: rgb(206, 65, 65);
  color: white;
  box-shadow: 3px 5px 5px rgb(91, 90, 90);
  opacity: .85;
  position: fixed;
  right: 0%;
  top: 28%;
}
button:hover {
  cursor: pointer;
  box-shadow: 2px 4px 5px rgb(91, 90, 90);
  opacity: .85;
  border: solid rgb(165, 47, 47);
  background-color: rgb(165, 47, 47);
  
}
</style>