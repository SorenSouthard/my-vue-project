<script setup>


</script>

<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
        <router-view />
    </div>

<!--     <Counter/>
    <ProjectList/> -->
  
</template>

<style scoped>
nav {
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 0;
    padding: 10px 0;
    background: white;
    border: 1px solid black;
    z-index: 1000;
}
router-link {
    text-decoration: none;
    font-size: 1.2em;
    color: black;
}
router-link:hover {
    text-decoration: underline;
}
</style>
