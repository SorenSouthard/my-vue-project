import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0); // Initialize count

    const increment = () => {
        count.value++; // Update count
    };

    return {
        count,
        increment
    };
}, { persist: true });