<template>
    <h1>Project List</h1>
    <div class="projectContainer">

    <div class="pList">
    <h2>Projects</h2>
    <!-- Calls Category filter to create buttons that has a function that updates cFilter upon clicking button -->
    <CategoryFilter 
      :categories="store.categories"
      :cFilter="store.cFilter"
      @update:cFilter="store.cFilter = $event"
    />

    <!-- Uses a select that acts as an input with v-model, new category is taken whenever a new project is made. -->
    <select v-model="store.newCategory">
        <option v-for="category in store.categories" :key="category"> {{ category }} </option>
    </select>
    <!-- Calls new project using text from newProject for text -->
    <input v-model="store.newProject" placeholder="Write Projects...">
    <button @click="store.addProject">Add Project</button>
    
    <!-- Creates list components  -->
    <ul>
        <ProjectItem
            v-for="project in store.filteredProjects"
            :key="project.id"
            :project="project"
            :cFilter="store.cFilter"
            @toggleProject="store.toggleProject"
            @deleteProject="store.deleteProject"
        />
    </ul>
    <h3 v-if="store.filteredProjects.length === 0">No Projects, please add a new one.</h3>
    </div>

    <!-- Stats about categorized projects saved using pinia state management. -->
    <div class="projectsInfo">
        <h2>{{ store.cFilter }} Projects</h2>
        <p>Projects: {{ store.totalProjects }}</p>
        <p>Projects Incomplete: {{ store.unfinishedProjects }}</p>
        <p>Projects Completed: {{ store.finishedProjects }}</p>
    </div>
    </div>
</template>

<script setup>
    import { useProjectStore } from "../stores/projectStore.js";
    import CategoryFilter from './CategoryFilter.vue';
    import ProjectItem from './ProjectItem.vue';

// Pinia state management with functions in comments below. 
    const store = useProjectStore();



/*     const cFilter = ref("All")
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


    const toggleProject = (project) => {
        project.checked = !project.checked;
    };

    const totalProjects = computed(()=> filteredProjects.value.length);
    const finishedProjects = computed(()=> filteredProjects.value.filter(project => project.checked).length);
    const unfinishedProjects = computed(()=> totalProjects.value - finishedProjects.value);

    
 */

</script>

<style scoped>
h1 {
    margin-bottom: 15px;
}

.projectContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    height: 80vh;
}

.projectsInfo{
    flex: 1;
    min-width: 50%;
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
}

.pList{
    flex: 1;
    text-align: center;
    margin: 10px;
    margin-bottom: -10px;
    max-height: 65vh;
    min-width: 60%;
    overflow-y: auto;
    border: 1px solid black;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 30px;
    border-radius: 5px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-top: 5px;
    padding: 5px 0px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #f9f9f9;
}
select {
    height: 30px;
}

input {
    display: block; 
    margin-bottom: 10px; 
    padding: 5px; 
    width: 96%; 
    margin: 5px 0; 
    max-width: 400px; 
    border-radius: 5px;
}
</style>