<template>
<div class="container">
    <h1>Contact Page</h1>
    <div class="inputs">
        <label>Enter Email:</label>
        <input
            v-model="store.email"
            :options="store.emailSuggest"
            placeholder="Enter Email"
        />
        <label>Enter Query: </label>
        <textarea v-model="store.query" placeholder="Enter text query..." type="text"></textarea>
    </div>
    <n-button @click="store.submitContact" type="default">Submit</n-button>
    <n-button @click="store.resetQueries" type="error">Reset</n-button>
    <div v-if="store.submissions.length > 0">
        <h2>Submitted Queries:</h2>
        <ul>
            <li v-for="(submission, index) in store.submissions" :key="index">
                <strong>Email: </strong>{{ submission.email }}  <br>
                <strong>Query: </strong>{{ submission.query }}
            </li>
        </ul>
    </div>
</div>
</template>

<script setup>
    import { useContactStore } from '../stores/contactStore';
    import { ref, computed, watch, onMounted } from 'vue';
    import { NButton, NAutoComplete } from 'naive-ui';

    const store = useContactStore();
/* 
    const email = ref("");
    const query = ref("");
    const submissions = ref([]);
    const emailSuggest = ref([]);

 
    naive-ui nautocomplete input broke for seemingly no reason and didn't retrieve email
        const updateEmailSuggestion = (value) => {
    console.log(value);
        if (!value.includes("@")) {
            emailSuggest.value = [`${value}@gmail.com`,`${value}@outlook.com`];
        } else {
            emailSuggest.value = [];
        }
    };

    watch(email, (newValue) => {
        if (newValue && !newValue.includes("@")) {
            emailSuggest.value = [`${newValue}@gmail.com`, `${newValue}@outlook.com`];
        } else {
            emailSuggest.value = [];
        }
    });


    watch(submissions, (newSubmissions) => {
        localStorage.setItem('submissions', JSON.stringify(newSubmissions));
    }, { deep: true });

    onMounted(() => {
        const savedSubmissions = localStorage.getItem('submissions');
        if (savedSubmissions) {
            try {
                submissions.value = JSON.parse(savedSubmissions);
            } catch (error) {
                console.error("Error parsing stored submissions:", error);
                submissions.value = [];
            }
        }
    });

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
 */
</script>

<style scoped>
h1 {
    margin-bottom: 10px;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 20px;
}
label {
    display: block;
    margin-top: 10px;
}

textarea {
    width: 100%;
    max-width: 600px;
    height: auto;
    min-height: 150px;
    padding: 5px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 110%;
    resize: vertical;
}
input {
    display: block; 
    margin-bottom: 10px; 
    padding: 5px; 
    width: 100%; 
    margin: 5px 0; 
    max-width: 400px; 
    text-align: center;
}
.inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
}
button {
    margin-top: 10px;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #f9f9f9;
}
</style>