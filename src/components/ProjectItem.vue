<template>
    <!-- makes list component with delete and toggle being emitted back to parent functions. -->
    <li
        :style="{textDecoration: project.checked ? 'line-through' : 'none'}"
        @click="toggleProject(project)"
    > 
    {{ cFilter !== project.category ? "[" + project.category + "]" : "" }} 
    {{ project.text }}
    <button @click="deleteProject(project.id)">X</button>

    </li>
</template>

<script setup>
    import { defineProps, defineEmits } from "vue";
    
    const props = defineProps(['project', 'cFilter']);

    const emit = defineEmits(['toggleProject','deleteProject']);

    const toggleProject = () => {
        emit('toggleProject', props.project);
    };

    const deleteProject = () => {
        emit('deleteProject', props.project.id);
    };
</script>

<style scoped>

</style>