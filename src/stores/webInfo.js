import { defineStore } from "pinia";
import {ref} from 'vue';
export const useWebInfoStore = defineStore('webInfo', ()=>{

    const webInfo = ref({
        name:"Home Page", //It used to be written name: "something-else" doesn't change when new is written in
        url: "sorenswebsite.com"
    });
    const usersNum = ref(0);
    const username = ref("");
    const newUser = ref("");
    const userAdd = ()=> {
        usersNum.value++;

    };
    const updateUserName = ()=> {
        if (newUser.value.trim())
            username.value = newUser.value;
    };

    const resetStore = () => {
        webInfo.value = {
            name: "Home Page",
            url: "sorenswebsite.com"
        };
        usersNum.value = 0;
        username.value = "";
        newUser.value= "";
    }
    return {
        webInfo,
        usersNum,
        username,
        newUser,
        userAdd,
        updateUserName,
        resetStore
    };
},{persist:true});