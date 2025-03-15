<template>
    <h3>Count: {{ counterStore.count }}</h3>
    <n-button type="primary" @click="counterStore.increment">Increment</n-button>
</template>

<script setup>
    import { NButton } from 'naive-ui';
    import { useCounterStore } from '../stores/counterStore.js';

    const counterStore = useCounterStore();
</script>

<style scoped>

</style>