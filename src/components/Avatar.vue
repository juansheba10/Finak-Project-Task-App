<template>
  <div>
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="avatar image"
      :style="{ height: size, width: size }"
    />
    <div
      v-else
      class="avatar no-image"
      :style="{ height: size, width: size }"
    />

    <div class="">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="single"
      >
        {{ uploading ? "Uploading ..." : "Upload" }}
      </label>
      <input
        style="position: absolute"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
        class="
          block
          w-1/2
          text-sm text-gray-900
          bg-gray-50
          rounded-lg
          border border-gray-300
          cursor-pointer
          dark:text-gray-400
          focus:outline-none
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        "
      />
    </div>
  </div>
</template>
  
  <script>
import { ref, toRefs, watch } from "vue";
import { supabase } from "../supabase";

export default {
  props: {
    path: String,
  },
  emits: ["upload", "update:path"],
  setup(prop, { emit }) {
    const { path } = toRefs(prop);
    const size = ref("10em");
    const uploading = ref(false);
    const src = ref("");
    const files = ref();

    const downloadImage = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path.value);
        if (error) throw error;
        src.value = URL.createObjectURL(data);
      } catch (error) {
        console.error("Error downloading image: ", error.message);
      }
    };

    const uploadAvatar = async (evt) => {
      files.value = evt.target.files;
      try {
        uploading.value = true;
        if (!files.value || files.value.length === 0) {
          throw new Error("You must select an image to upload.");
        }

        const file = files.value[0];
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        let { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, file);

        if (uploadError) throw uploadError;
        emit("update:path", filePath);
        emit("upload");
      } catch (error) {
        alert(error.message);
      } finally {
        uploading.value = false;
      }
    };

    watch(path, () => {
      if (path.value) downloadImage();
    });

    return {
      size,
      uploading,
      src,
      files,

      uploadAvatar,
    };
  },
};
</script>