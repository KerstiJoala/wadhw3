<template>
  <div class="login">
    <img :src="require('/src/assets/postit.png')" alt="logo" width="70" height="70" id="logo">
    <h1>Welcome to PostIt!</h1>
    <a href="">Create an Account</a>
    <h2>or</h2>
    <h2>Please Log In</h2>
    <label>
      <input type="text"  placeholder=" Email" name ="email"/>
    </label><br>
    <label>
      <input type="password" placeholder=" Password" name="password"/>
    </label> <br>
    <button onclick="document.location='index.html'">Log In</button> <br>
    <a href="" id="forgot">Forgot your password?</a>
    <p>    </p>
  </div>
</template>

<script>
const router = require("@/router");
export default {
  name: 'Login',
  methods: {
    navigate() {
      router.push({name: 'Login'})
    }
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
