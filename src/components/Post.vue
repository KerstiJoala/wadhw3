<template>
  <div id="post-list">
    <ul>
      <li class="post" v-for = "post in postList" :key="post.id">
        <img :src="require('/src/assets/pngegg.png')" alt="profilePic" width="30" height="30" >
        <span class="date"> {{post.date}}</span>
        <span class="title"> {{post.title}}</span>
        <span class="text"> {{post.text}}</span>
        <img :src="post.image" alt="postPic" v-if="post.image">
        <img :src="require('/src/assets/like-button-black.png')" alt="like" width="30" height="30" >
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "post",
  data: function () {
    return {
    }
  },

computed: {
    postList(){
      return this.$store.state.postList
    }
}
}
</script>

<style scoped>

</style>