import { defineStore } from "pinia";
import {ref, computed} from "vue";

export const useContactStore = defineStore('contactStore', () => {
    
    const email = ref("");
    const query = ref("");
    const submissions = ref([]);

    const submitContact = ()=> {
        console.log("Submit Button Clicked!", email.value.trim(), query.value.trim());
        if (email.value.trim() && query.value.trim()) {
            submissions.value.push({email: email.value, query: query.value});
            email.value = "";
            query.value = "";
        }
    };

    const resetQueries = () => {
        submissions.value = [];
        localStorage.removeItem('submissions');
    };
    return {
        email,
        query,
        submissions,
        submitContact,
        resetQueries
    };
},{persist: true});