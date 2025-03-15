<template>
    <div class="homepage">
        <div class="pageTop">
            <h1>{{ webInfoStore.webInfo.name }}</h1>
            Url: {{ webInfoStore.webInfo.url }}
            <h2 v-if="webInfoStore.usersNum === 0 && !webInfoStore.username.trim()"> Welcome!!! Use the navigation bar on top to navigate to different pages, or stay on homepage where you can update username or click! </h2>
        </div>
        <div>
            User: {{ webInfoStore.username }} <br>
            <input v-model="webInfoStore.newUser" placeholder="Enter username..." type="text">
            <n-button class="infoButton" type="Info" @click="webInfoStore.updateUserName">Update Username</n-button><br>
        </div>

        
        Clicks: {{ webInfoStore.usersNum }}
        <n-button class="infoButton" type="Info" @click="webInfoStore.userAdd">Click!</n-button> <br>
        <n-button class="infoButton" type="error" @click="webInfoStore.resetStore">Reset Page</n-button>
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
.pageTop h1 {
    margin-bottom: 10px;
}
</style>
