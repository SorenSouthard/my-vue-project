<template>
    <!-- Creates buttons using v-for with the categories, has a function that updates filter upon clicking button-->
        <n-button 
            v-for="category in categories"
            :key="category"
            :type="cFilter === category? 'primary' : 'default'"
            @click="setFilter(category)"
        > 
            {{category}} 
        </n-button>
</template>

<script setup>
    import { defineProps, defineEmits } from "vue";
    import { NButton } from "naive-ui";

    const props = defineProps({
        categories:Array,
        cFilter:String
    });

    const emit = defineEmits(["update:cFilter"]);

    const setFilter = (category) => {
        emit("update:cFilter", category);
    };
</script>

<style scoped>

</style>