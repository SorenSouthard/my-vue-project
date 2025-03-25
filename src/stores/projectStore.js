import { defineStore } from "pinia";
import {ref, computed} from "vue";

export const useProjectStore = defineStore('projectStore', () => {
    
    const cFilter = ref("All")
    const newProject = ref("")
    const newCategory = ref("All")
    const categories = ref(["All", "Personal", "Work/School"]);
    const projects = ref([
        {id:1, text:"Finish Homework 3", category: "All", checked:false},
        {id:2, text:"Write Projects", category: "All", checked:false},
        {id:3, text:"Make Breakfast", category: "All", checked:false}
    ]);

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

    const toggleProject = (project) => {
        project.checked = !project.checked;
    };

    const filteredProjects = computed(() => {
        if (cFilter.value === 'All') {
            return projects.value;
        } else {
            return projects.value.filter(project => project.category === cFilter.value);

        }
    });

    const totalProjects = computed(()=> filteredProjects.value.length);
    const finishedProjects = computed(()=> filteredProjects.value.filter(project => project.checked).length);
    const unfinishedProjects = computed(()=> totalProjects.value - finishedProjects.value);

    

    return {
        cFilter,
        newProject,
        newCategory,
        categories,
        projects,
        filteredProjects,
        totalProjects,
        finishedProjects,
        unfinishedProjects,
        addProject,
        deleteProject,
        toggleProject
    };
},{persist: true});