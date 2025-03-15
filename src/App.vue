<script setup>
import Counter from './components/Counter.vue';
import ProjectList from './components/ProjectList.vue';
import { useWebInfoStore } from './stores/webInfo.js';
import { NButton } from 'naive-ui';

const themeOverrides = {
  Button: {
    padding: "5px"
  }
}

const webInfoStore = useWebInfoStore();
console.log(webInfoStore.webInfo.name);
</script>

<template>
  <div><h1>{{ webInfoStore.webInfo.name }}</h1> <br>
  Url: {{ webInfoStore.webInfo.url }} <br>
  Users: {{ webInfoStore.usersNum }}
  Username: {{ webInfoStore.username }} <br>
  </div>
    <input v-model="webInfoStore.newUser" placeholder="Enter username..." type="text">
    <n-button class="infoButton" type="Info" @click="webInfoStore.userAdd">Add User</n-button>
    <n-button class="infoButton" type="Info" @click="webInfoStore.updateUserName">Update Username</n-button>
    <Counter/>
    <ProjectList/>
  
</template>

<style scoped>
  .infoButton{
    padding: 5px 10px;
    margin: 5px 2px;
  }
</style>
