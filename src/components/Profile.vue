<template>
  <Nav />
  <form class="form-widget" @submit.prevent="updateProfile, getProfile">
    <div>
      <div class="">
        <div class="md:col-span-1 lg:justify-center lg:flex lg:w-1/2">
          <div class="px-4 sm:px-0">
            <h1
              class="
                mt-5
                text-2xl
                font-medium
                leading-6
                text-gray-900
                flex
                justify-center
              "
            >
              Profile
            </h1>
            <p
              class="mt-3 text-center text-xl text-gray-600 flex justify-center"
            >
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div class="shadow sm:overflow-hidden sm:rounded-md">
              <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <div class="mt-3">
                      <label
                        for="company-website"
                        class="block text-sm font-medium text-gray-700"
                        >User Name</label
                      >
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span
                          id="username"
                          class="
                            inline-flex
                            items-center
                            rounded-l-md
                            border border-r-0 border-gray-300
                            bg-gray-50
                            px-3
                            text-sm text-gray-500
                          "
                          >Name</span
                        >
                        <input
                          type="text"
                          name="company-website"
                          v-model="username"
                          id="username"
                          class="
                            block
                            w-full
                            flex-1
                            rounded-none rounded-r-md
                            border-gray-300
                            focus:border-indigo-500 focus:ring-indigo-500
                            sm:text-sm
                          "
                          placeholder="Input your Name"
                        />
                      </div>
                    </div>
                    <label
                      for="company-website"
                      class="block text-sm font-medium text-gray-700 mt-3"
                      >Website</label
                    >
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span
                        class="
                          inline-flex
                          items-center
                          rounded-l-md
                          border border-r-0 border-gray-300
                          bg-gray-50
                          px-3
                          text-sm text-gray-500
                        "
                        >http://</span
                      >
                      <input
                        type="text"
                        name="company-website"
                        @upload="updateProfile"
                        v-model="website"
                        id="company-website"
                        class="
                          block
                          w-full
                          flex-1
                          rounded-none rounded-r-md
                          border-gray-300
                          focus:border-indigo-500 focus:ring-indigo-500
                          sm:text-sm
                        "
                        placeholder="www.example.com"
                      />
                    </div>
                    <div class="mt-3">
                      <label
                        for="company-website"
                        class="block text-sm font-medium text-gray-700"
                        >Email</label
                      >
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span
                          class="
                            inline-flex
                            items-center
                            rounded-l-md
                            border border-r-0 border-gray-300
                            bg-gray-50
                            px-3
                            text-sm text-gray-500
                          "
                          >@</span
                        >
                        <input
                          type="text"
                          v-model="email"
                          @upload="updateProfile"
                          name="company-website"
                          id="company-website"
                          class="
                            block
                            w-full
                            flex-1
                            rounded-none rounded-r-md
                            border-gray-300
                            focus:border-indigo-500 focus:ring-indigo-500
                            sm:text-sm
                          "
                          placeholder="Email Example"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                    >About</label
                  >
                  <div class="mt-1">
                    <textarea
                      id="about"
                      v-model="about"
                      @upload="updateProfile"
                      name="about"
                      rows="3"
                      class="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-500 focus:ring-indigo-500
                        sm:text-sm
                      "
                      placeholder="you@example.com"
                    />
                  </div>
                  <Avatar
                    v-model:path="avatar_url"
                    @click="updateProfile"
                    class="flex"
                  />
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  @click="updateProfile"
                  :disabled="loading"
                  class="
                    button
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    bg-indigo-600
                    py-2
                    px-4
                    text-sm
                    font-medium
                    text-white
                    shadow-sm
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                  "
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </form>
  <Footer />
</template>
  
  <script>
import { supabase } from "../supabase";
import { store } from "../stores/store";
import { onMounted, ref } from "vue";
import Avatar from "./Avatar.vue";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const loading = ref(true);
    const username = ref("");
    const website = ref("");
    const avatar_url = ref("");
    const email = ref("");
    const about = ref("");
    const redirect = useRouter();

    async function getProfile() {
      try {
        loading.value = true;
        store.user = supabase.auth.user();
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, website, avatar_url, email, about`)
          .eq("id", store.user.id)
          .single();
        if (error && status !== 406) throw error;
        if (data) {
          username.value = data.username;
          website.value = data.website;
          avatar_url.value = data.avatar_url;
          email.value = data.email;
          about.value = data.about;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }
    async function updateProfile() {
      try {
        loading.value = true;
        store.user = supabase.auth.user();
        const updates = {
          id: store.user.id,
          username: username.value,
          website: website.value,
          email: email.value,
          avatar_url: avatar_url.value,
          about: about.value,
          updated_at: new Date(),
        };

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        });

        await redirect.push({ path: "/profile" });

        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    function returnHome() {}
    onMounted(() => {
      getProfile();
    });
    return {
      store,
      loading,
      username,
      website,
      avatar_url,
      email,
      about,
      updateProfile,
    };
  },
  components: { Avatar, Nav, Footer },
};
</script>