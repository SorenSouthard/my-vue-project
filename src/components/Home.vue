<template>
    <div class="homepage">
    <div class ="split left">
        <div class="centered-home">
            <div class="pageTop">
                <h1>{{ webInfoStore.webInfo.name }}</h1>
                Url: {{ webInfoStore.webInfo.url }}
                <h2 v-if="webInfoStore.usersNum === 0 && !webInfoStore.username.trim()"> Welcome!!! Use the navigation bar on top to navigate to different pages, or stay on homepage where you can update username or click! </h2>
            </div>
            <div>
                <input v-model="webInfoStore.newUser" placeholder="Enter username..." type="text">
                <n-button class="infoButton" type="Info" @click="webInfoStore.updateUserName">Update Username</n-button><br>
                <n-button class="infoButton" type="error" @click="webInfoStore.resetStore">Reset Page</n-button>
            </div>
        </div>
    </div>
    <div class="split right">
        <div class="centered-click">
            <h1> Clicker Game</h1>
            <h2> Username: {{ webInfoStore.username }} </h2><br>
            <h2>Clicks: {{ webInfoStore.usersNum }}</h2><br>
            <n-button class="infoButton" type="Info" @click="webInfoStore.userAdd">Click!</n-button>
        </div>
    </div> 
    </div>
</template>

<script setup>
    import { useWebInfoStore } from '../stores/webInfo.js';
    import { NButton } from 'naive-ui';
    const webInfoStore = useWebInfoStore();


</script>

<style scoped>
.homepage {
    text-align: center;
    margin-top: 50px;
}
.infoButton{
    padding: 5px 10px;
    margin: 5px 2px;
}
.pageTop  {
    margin-top: -100px;
    margin-bottom: 60px;
}
h1 {
    margin-bottom: 10px;
}
.split {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
}

.left {
    left: 0;
}

.right {
    right: 0;
}

.centered-home {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -50%);
    text-align: center;
}
.centered-click{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -50%);
    text-align: center;
}

input {
    display: block; 
    margin-bottom: 10px; 
    padding: 5px; 
    width: 100%; 
    margin: 5px 0; 
    max-width: 400px; 
    border-radius: 5px;
}
    </style>
