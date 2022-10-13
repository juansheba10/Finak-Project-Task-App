<template>
  <nav
    class="
      bg-white
      border-gray-200
      px-2
      sm:px-4
      py-2.5
      rounded
      dark:bg-gray-900
    "
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="
            self-center
            text-2xl
            font-semibold
            whitespace-nowrap
            dark:text-white
          "
          >TaskApp</span
        >
      </a>
      <button>
        <svg
          v-if="darkLogo"
          @click="toggleDark(), (darkLogo = !darkLogo)"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>
        <svg
          v-else
          @click="toggleDark(), (darkLogo = !darkLogo)"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="
          inline-flex
          items-center
          p-2
          ml-3
          text-sm text-gray-500
          rounded-lg
          md:hidden
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
        "
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="
            flex flex-col
            p-4
            mt-4
            bg-gray-50
            rounded-lg
            border border-gray-100
            md:flex-row
            md:space-x-8
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            md:bg-white
            dark:bg-gray-800
            md:dark:bg-gray-900
            dark:border-gray-700
          "
        >
          <li>
            <a
              @click="signOut"
              href="#"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white
                bg-blue-700
                rounded
                md:bg-transparent md:text-blue-700 md:p-0
                dark:text-white
              "
              aria-current="page"
              >Log Out</a
            >
          </li>
          <li>
            <PersonalRouter
              href="#"
              text="Testimonials"
              :route="route"
              class="
                block
                py-2
                pr-4
                pl-3
                text-gray-700
                rounded
                hover:bg-gray-100
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
              "
            />
          </li>
          <li>
            <a
              href="#"
              class="
                block
                py-2
                pr-4
                pl-3
                text-gray-700
                rounded
                hover:bg-gray-100
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
              "
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="
                block
                py-2
                pr-4
                pl-3
                text-gray-700
                rounded
                hover:bg-gray-100
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
              "
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="
                block
                py-2
                pr-4
                pl-3
                text-gray-700
                rounded
                hover:bg-gray-100
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
              "
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useDark, useToggle } from "@vueuse/core";
//CONST PARA USAR LA TIENDA DEL USUARIO PARA HACER MI SIGN OUT
const route = "/clients-section";

const user = useUserStore();
//Función para hacer sign-out

// Error Message
const errorMsg = ref("");

// Router to push user to SignedIn component
const redirect = useRouter();

// Arrow function to SignOut User
const signOut = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await user.signOut();
    // redirects user to the homeView
    redirect.push({ path: "/auth/login" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};

const isDark = useDark();
const toggleDark = useToggle(isDark);

const darkLogo = ref(true);
//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>
