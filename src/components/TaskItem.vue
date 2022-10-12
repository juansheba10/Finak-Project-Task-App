<template>
  <div
    class="
      taskItem
      p-9
      max-w-sm
      bg-white
      rounded-lg
      border border-gray-200
      shadow-md
      md:justify-center
      sm:h-full
      w-full
      md:w-2/5 md:
      m-5
      animate-animated animate-fadeInUp
      dark:bg-gray-400
    "
    :data-id="taskData.id"
  >
    <div v-if="!editMode">
      <div class="flex justify-center">
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      </div>
      <b
        class="
          mb-2
          text-2xl
          font-bold
          tracking-tight
          text-gray-900
          dark:text-gray-700
          flex
          justify-center
          tranition
          duration-200
        "
        >{{ taskData.title }} </b
      ><br />

      <i
        class="
          mb-3
          font-normal
          text-gray-700
          dark:text-gray-900
          flex
          justify-center
        "
      >
        {{ taskData.description }}</i
      ><br />
      <div class="flex justify-around transition duration-200">
        <button v-if="taskData.is_complete" @click="uncompleteOneTask" class="">
          UNDO
        </button>
        <button
          v-else
          @click="completeOneTask"
          class="
            inline-flex
            items-center
            py-2
            px-3
            text-sm
            font-bold
            text-center text-white
            bg-green-500
            rounded-lg
            hover:bg-green-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-green-600 dark:hover:green-700 dark:focus:ring-green-800
          "
        >
          DONE
        </button>
        <button
          v-if="!taskData.is_complete"
          @click="editMode = true"
          class="
            inline-flex
            items-center
            py-2
            px-3
            text-sm
            font-bold
            text-center text-white
            bg-orange-500
            rounded-lg
            hover:bg-orange-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-orange-600
            dark:hover:bg-orange-700
            dark:focus:ring-orange-800
          "
        >
          Edit
        </button>
        <button
          @click="deleteTask"
          class="
            inline-flex
            items-center
            py-2
            px-3
            text-sm
            font-medium
            text-center text-white
            bg-red-500
            rounded-lg
            hover:bg-red-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500
          "
        >
          Delete
        </button>
      </div>
    </div>
    <div v-else>
      <h1 class="mb-3 font-serif font-semibold text-center">Edit Your Task</h1>
      <h3 class="font-serif font-semibold">Title</h3>
      <input
        class="
          block
          p-4
          w-full
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
        "
        type="text"
        v-model="taskData.title"
      />

      <h4 class="font-serif font-semibold mt-3">Description</h4>
      <textarea
        type="text"
        class="
          block
          p-4
          w-full
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
        "
        v-model="taskData.description"
      /><br />
      <div class="flex justify-center">
        <button
          @click="saveEditedTask()"
          class="
            inline-flex
            items-center
            mr-5
            py-3
            px-4
            text-sm
            font-bold
            text-center text-white
            bg-blue-500
            rounded-lg
            hover:bg-red-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
        >
          Save
        </button>
        <button
          @click="editMode = false"
          class="
            inline-flex
            items-center
            py-3
            px-4
            text-sm
            font-bold
            text-center text-white
            bg-red-500
            rounded-lg
            hover:bg-red-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task.js";
// Data that TaskItem is recieved when called in Home
const props = defineProps(["taskData"]);
// External event that Home will respond with a function to
const emit = defineEmits(["updateTasksAgain"]);
// Store reference
const taskStore = useTaskStore();
//Current ID
let myID = props.taskData.id;
// Edit mode
let editMode = ref(false);
async function saveEditedTask() {
  myID = props.taskData.id;
  editMode.value = false;
  await taskStore.editTask(
    myID,
    props.taskData.title,
    props.taskData.description
  );
  emit("updateTasksAgain");
}
async function deleteTask() {
  myID = props.taskData.id;
  if (confirm("Are you sure you want to delete task id " + myID + "?")) {
    await taskStore.deleteSpecificTask(myID);
    emit("updateTasksAgain");
  }
}
async function completeOneTask() {
  myID = props.taskData.id;
  await taskStore.completeTask(myID);
  emit("updateTasksAgain");
}
async function uncompleteOneTask() {
  myID = props.taskData.id;
  await taskStore.uncompleteTask(myID);
  emit("updateTasksAgain");
}
</script>

<style></style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
