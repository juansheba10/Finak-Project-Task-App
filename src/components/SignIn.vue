<template>
  <div class="h-screen flex">
    <div
      class="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center"
    >
      <div class="bg-black opacity-20 inset-0 z-0"></div>
      <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
        <h1 class="text-white font-bold text-4xl font-sans">Simple App</h1>
        <p class="text-white mt-1">The simplest app to use</p>
        <div class="flex justify-center lg:justify-start mt-6">
          <a
            href="#"
            class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
            >Get Started</a
          >
        </div>
      </div>
    </div>
    <div
      class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8"
    >
      <div class="w-full px-8 md:px-32 lg:px-24">
        <form
          class="bg-white rounded-md shadow-2xl p-5"
          @submit.prevent="signIn"
        >
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Sign In!</h1>
          <p class="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
          <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              v-model="email"
              id="email"
              class="pl-2 w-full outline-none border-none"
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              :type="passwordFieldType"
              class="pl-2 w-full outline-none border-none"
              v-model="password"
              onpaste="return false"
              placeholder="************"
              name="password"
              id="password"
            />
            <span class="">
              <EyeIcon
                :class="[passwordFieldIcon]"
                @click.prevent="hidePassword = !hidePassword"
              />
            </span>
          </div>
          <button
            type="submit"
            class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
          >
            Sign In
          </button>
          <div class="flex justify-between mt-4">
            <span
              class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              >Forgot Password ?</span
            >

            <a
              href="#"
              class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              >Don’t have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Test the Sign Up Route";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style>
.login_img_section {
  background: linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center center;
}
/* .wu-text {
  color: black;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.input {
  color: black;
  margin-bottom: 1rem;
}
.button {
  background-color: #4caf50; /* Green */
/* border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}  */
</style>
