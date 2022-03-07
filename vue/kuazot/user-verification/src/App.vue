<template>
  <v-app id="inspire">
    <!-- <div class="fake_header"></div> -->
    <div id="user-verification_wrapper">
        <h2 class="app_page_title">Верификация пользователя</h2>
        <v-container>
          <user-verification-wrapper/>
        </v-container>
         </div>
  </v-app>
</template>

<script>

import userVerificationWrapper from "./components/userVerificationWrapper.vue"


export default {
  
  name: 'App',
  components: {
    userVerificationWrapper,
  }
  
}
</script>

<style>
.fake_header {
  background: rgb(81, 81, 238);
  height: 65px;
}
.v-application--wrap{
  min-height: calc(100vh - 65px) !important;
  background: rgb(243, 243, 243);
}
#user-verification_wrapper{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  padding: 5px 15px;
}
.app_page_title {
  font-size: 24px;
  font-weight: 300;
  text-align: left;
  margin-bottom: 40px;
}

</style>
