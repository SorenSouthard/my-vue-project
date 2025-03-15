<template>
    <div class="Projects info">
        <h3 v-show="projects.length === 0">No Projects listed, please add to list.</h3>
        <h3>{{ cFilter }} Projects</h3>
        <p>Projects: {{ totalProjects }}</p>
        <p>Projects Incomplete: {{ unfinishedProjects }}</p>
        <p>Projects Completed: {{ finishedProjects }}</p>
    </div>
    <div class="category-filter">
        <button 
            v-for="category in categories"
            :key="category"
            @click="setFilter(category)"
        > 
            {{category}} 
        </button>
    </div>

    <select v-model="newCategory">
        <option v-for="category in categories" :key="category"> {{ category }}</option>
    </select>

    <input v-model="newProject" placeholder="Write Projects...">
    <button @click="addProject">Add Project</button>
    
    <ul>
        <li v-for= "project in filteredProjects"
        :key = "project.id"
        :project = "project"
        :style="{textDecoration: project.checked ? 'line-through' : 'none'}"
        @click="toggleChecked(project)"> {{ cFilter !== project.category ? "[" + project.category + "]" : "" }} {{ project.text }}
        <button @click="deleteProject(project.id)">X</button>
        </li>
    </ul>
</template>

<script setup>
    import { ref, computed, watch, onMounted } from 'vue';

    const cFilter = ref("All")
    const newProject = ref("")
    const newCategory = ref("All")
    const categories = ref(["All", "Personal", "Work/School"]);
    const projects = ref([
        {id:1, text:"Finish Homework 3", category: "All", checked:false},
        {id:2, text:"Write Projects", category: "All", checked:false},
        {id:3, text:"Make Breakfast", category: "All", checked:false}
    ]);

    watch(projects, (newVal) => {
        localStorage.setItem('projects', JSON.stringify(newVal));
    }, { deep: true });

    onMounted(() => {
        const savedProjects = localStorage.getItem('projects');
        if (savedProjects) {
            try {
                projects.value = JSON.parse(savedProjects);
        } catch (error) {
            console.error("Error parsing projects from localStorage:", error);
            projects.value = [];
            }
        }
    });

    const addProject = ()=> {
        if (newProject.value.trim()) {
            projects.value.push({
                id: Date.now(),
                text: newProject.value.trim(),
                category: newCategory.value,
                checked: false
            })
            newProject.value = '';
        }
    };

    const deleteProject = (projectId)=> {
        projects.value = projects.value.filter(project => project.id !== projectId);
    };

    const filteredProjects = computed(() => {
        if (cFilter.value === 'All') {
            return projects.value;
        } else {
            return projects.value.filter(project => project.category === cFilter.value);

        }
    });

    const setFilter = (category) => {
        cFilter.value = category
    };

    const toggleChecked = (project) => {
        project.checked = !project.checked;
    };

    const totalProjects = computed(()=> filteredProjects.value.length);
    const finishedProjects = computed(()=> filteredProjects.value.filter(project => project.checked).length);
    const unfinishedProjects = computed(()=> totalProjects.value - finishedProjects.value);

    


</script>

<style scoped>

</style>