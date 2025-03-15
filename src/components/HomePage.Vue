<template>
    <div class="homepage">
        <h1>Welcome to My App</h1>
        <p>Select a page:</p>
        <nav>
            <router-link to="/projects">View Projects</router-link>
        </nav>
        <div>
            <h1>{{ webInfoStore.webInfo.name }}</h1> <br>
            Url: {{ webInfoStore.webInfo.url }} <br>
            Users: {{ webInfoStore.usersNum }}
            Username: {{ webInfoStore.username }} <br>
        </div>

        <input v-model="webInfoStore.newUser" placeholder="Enter username..." type="text">
        <n-button class="infoButton" type="Info" @click="webInfoStore.userAdd">Add User</n-button>
        <n-button class="infoButton" type="Info" @click="webInfoStore.updateUserName">Update Username</n-button>
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
nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}
router-link {
    text-decoration: none;
    font-size: 1.2em;
    color: #007bff;
}
router-link:hover {
    text-decoration: underline;
}
.infoButton{
    padding: 5px 10px;
    margin: 5px 2px;
  }
</style>
