<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div
        class="
          flex flex-wrap
          justify-between
          items-center
          mx-auto
          max-w-screen-xl
        "
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >Flowbite</span
          >
        </a>
        <div class="flex items-center lg:order-2">
          <PersonalRouter
            href="#"
            text="Login"
            :route="route1"
            class="
              text-gray-800
              dark:text-white
              hover:bg-gray-50
              focus:ring-4 focus:ring-gray-300
              font-medium
              rounded-lg
              text-sm
              px-4
              lg:px-5
              py-2
              lg:py-2.5
              mr-2
              dark:hover:bg-gray-700
              focus:outline-none
              dark:focus:ring-gray-800
            "
          />
          <PersonalRouter
            href=""
            text="Get Started"
            :route="route1"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:ring-primary-300
              font-medium
              rounded-lg
              text-sm
              px-4
              lg:px-5
              py-2
              lg:py-2.5
              mr-2
              dark:bg-primary-600 dark:hover:bg-primary-700
              focus:outline-none
              dark:focus:ring-primary-800
            "
          />
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="
              inline-flex
              items-center
              bg-blue
              p-2
              ml-1
              text-sm text-gray-500
              rounded-lg
              lg:hidden
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
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
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="
            hidden
            justify-between
            items-center
            w-full
            lg:flex lg:w-auto lg:order-1
          "
          id="mobile-menu-2"
        >
          <ul
            class="
              flex flex-col
              mt-4
              font-medium
              lg:flex-row lg:space-x-8 lg:mt-0
            "
          >
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-white
                  rounded
                  bg-primary-700
                  lg:bg-transparent lg:text-primary-700 lg:p-0
                  dark:text-white
                "
                aria-current="page"
                >Home</a
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
                  border-b border-gray-100
                  hover:bg-gray-50
                  lg:hover:bg-transparent
                  lg:border-0
                  lg:hover:text-primary-700
                  lg:p-0
                  dark:text-gray-400
                  lg:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  lg:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Company</a
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
                  border-b border-gray-100
                  hover:bg-gray-50
                  lg:hover:bg-transparent
                  lg:border-0
                  lg:hover:text-primary-700
                  lg:p-0
                  dark:text-gray-400
                  lg:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  lg:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Marketplace</a
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
                  border-b border-gray-100
                  hover:bg-gray-50
                  lg:hover:bg-transparent
                  lg:border-0
                  lg:hover:text-primary-700
                  lg:p-0
                  dark:text-gray-400
                  lg:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  lg:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Features</a
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
                  border-b border-gray-100
                  hover:bg-gray-50
                  lg:hover:bg-transparent
                  lg:border-0
                  lg:hover:text-primary-700
                  lg:p-0
                  dark:text-gray-400
                  lg:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  lg:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Team</a
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
                  border-b border-gray-100
                  hover:bg-gray-50
                  lg:hover:bg-transparent
                  lg:border-0
                  lg:hover:text-primary-700
                  lg:p-0
                  dark:text-gray-400
                  lg:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  lg:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm">
        <h2
          class="
            mb-4
            text-4xl
            tracking-tight
            font-extrabold
            text-gray-900
            dark:text-white
          "
        >
          Testimonials of our Clients
        </h2>
        <p
          class="
            mb-8
            font-light
            text-gray-500
            lg:mb-16
            sm:text-xl
            dark:text-gray-400
          "
        >
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
        <figure
          class="
            flex flex-col
            justify-center
            items-center
            p-8
            text-center
            bg-gray-50
            border-b border-gray-200
            md:p-12
            lg:border-r
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <blockquote
            class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Speechless with how easy this was to integrate
            </h3>
            <p class="my-4">
              "I recently got my hands on Flowbite Pro, and holy crap, I'm
              speechless with how easy this was to integrate within my
              application. Most templates are a pain, code is scattered, and
              near impossible to theme.
            </p>
            <p class="my-4">
              Flowbite has code in one place and I'm not joking when I say it
              took me a matter of minutes to copy the code, customise it and
              integrate within a Laravel + Vue application.
            </p>
            <p class="my-4">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <img
              class="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bonnie Green</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
        <figure
          class="
            flex flex-col
            justify-center
            items-center
            p-8
            text-center
            bg-gray-50
            border-b border-gray-200
            md:p-12
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <blockquote
            class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p class="my-4">
              "FlowBite provides a robust set of design tokens and components
              based on the popular Tailwind CSS framework. From the most used UI
              components like forms and navigation bars to the whole app screens
              designed both for desktop and mobile, this UI kit provides a solid
              foundation for any project.
            </p>
            <p class="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <img
              class="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
        <figure
          class="
            flex flex-col
            justify-center
            items-center
            p-8
            text-center
            bg-gray-50
            border-b border-gray-200
            lg:border-b-0
            md:p-12
            lg:border-r
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <blockquote
            class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Mindblowing workflow and variants
            </h3>
            <p class="my-4">
              "As someone who mainly designs in the browser, I've been a casual
              user of Figma, but as soon as I saw and started playing with
              FlowBite my mind was 🤯.
            </p>
            <p class="my-4">
              Everything is so well structured and simple to use (I've learnt so
              much about Figma by just using the toolkit).
            </p>
            <p class="my-4">
              Aesthetically, the well designed components are beautiful and will
              undoubtedly level up your next application."
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <img
              class="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jese Leos</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption>
        </figure>
        <figure
          class="
            flex flex-col
            justify-center
            items-center
            p-8
            text-center
            bg-gray-50
            border-gray-200
            md:p-12
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <blockquote
            class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Efficient Collaborating
            </h3>
            <p class="my-4">
              "This is a very complex and beautiful set of elements. Under the
              hood it comes with the best things from 2 different worlds: Figma
              and Tailwind.
            </p>
            <p class="my-4">
              You have many examples that can be used to create a fast prototype
              for your team."
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <img
              class="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Joseph McFall</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                CTO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="text-center">
        <a
          href="#"
          class="
            py-2.5
            px-5
            mr-2
            mb-2
            text-sm
            font-medium
            text-gray-900
            focus:outline-none
            bg-white
            rounded-lg
            border border-gray-200
            hover:bg-gray-100 hover:text-blue-700
            focus:z-10 focus:ring-4 focus:ring-gray-200
            dark:focus:ring-gray-700
            dark:bg-gray-800
            dark:text-gray-400
            dark:border-gray-600
            dark:hover:text-white
            dark:hover:bg-gray-700
          "
          >Show more...</a
        >
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Nav from "./Nav.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import Footer from "./Footer.vue";

const route = "/auth/sign-up";
const route1 = "/auth/login";
</script>