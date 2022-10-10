<template>
  <div class="flex flex-col">
    <h1 class="flex justify-center text-5xl font-bold m-3 mt-9">Create task</h1>
    <div>
      <p class="mb-6 font-serif flex text-center justify-center">
        Lists and cards are the building blocks of organizing work on a
        TaskCard. 📋
      </p>
    </div>
    <div class="flex justify-center">
      <input
        class="
          block
          p-4
          w-1/2
          text-gray-900
          bg-gray-50
          rounded-lg
          border border-gray-300
          sm:text-md
          focus:ring-blue-500 focus:border-blue-500
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          mb-4
          shadow-md
          md:w-2/3
          sm:w-2/3
        "
        v-model="taskTitle"
        type="text"
        id="newTaskTitle"
        placeholder="Add a Title to your task!"
      />
    </div>

    <div class="flex justify-center">
      <textarea
        class="
          block
          p-4
          w-1/2
          h-1/2
          text-gray-900
          bg-gray-50
          rounded-lg
          border border-gray-300
          sm:text-md
          focus:ring-blue-500 focus:border-blue-500
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          shadow-md
          md:w-2/3
          sm:w-2/3
        "
        cols="28"
        rows="5"
        v-model="taskDesc"
        type="text"
        id="newTaskDesc"
        placeholder="Add a description to your task!"
      />
    </div>
    <br />
    <div class="flex justify-center">
      <button
        @click.prevent="uploadTask"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded-full
          mb-5
          w-1/4
          md:w-1/3
          sm:w-1/3
        "
      >
        Create
      </button>
    </div>
  </div>
  <div>
    <h3 v-if="errorBool">{{ emptyString }}</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useTaskStore } from "../stores/task.js";
const emit = defineEmits(["childNewTask"]);
let taskTitle = ref("");
let taskDesc = ref("");
let errorBool = ref(false);
const emptyString = ref("");
function uploadTask() {
  if (taskTitle.value === "") {
    errorBool.value = true;
    emptyString.value = "Title is required.";
    setTimeout(() => {
      errorBool.value = false;
    }, 1000);
  } else {
    emit("childNewTask", taskTitle.value, taskDesc.value);
    taskTitle.value = "";
    taskDesc.value = "";
    console.log(taskTitle.value);
  }
}
// constant to save a variable that define the custom event that will be emitted to the homeView

// constant to save a variable that holds the value of the title input field of the new task

// constant to save a variable that holds the value of the description input field of the new task

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty

// const constant to save a variable that holds the value of the error message

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
</script>

<style></style>
