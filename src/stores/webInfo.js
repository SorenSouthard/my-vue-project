import { defineStore } from "pinia";
import {ref} from 'vue';
export const useWebInfoStore = defineStore('webInfo', ()=>{

    const webInfo = ref({
        name:"Click-counter", //It used to be written name: "something-else" doesn't change when new is written in
        url: "icollege.gsu.edu"
    });
    const usersNum = ref(1000);
    const username = ref("");
    const newUser = ref("");
    const userAdd = ()=> {
        usersNum.value++;

    };
    const updateUserName = ()=> {
        if (newUser.value.trim())
            username.value = newUser.value;
    };
    return {
        webInfo,
        usersNum,
        username,
        newUser,
        userAdd,
        updateUserName
    };
},{persist:true});