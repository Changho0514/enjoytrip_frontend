<script setup>
import { ref, onMounted } from "vue";

defineProps({ hotplace: Object });

const urls = ({ saveFolder, saveFile }) =>
  `http://localhost:8090/enjoytrip/upload/${saveFolder}/${saveFile}`;
</script>

<template>
  <tr class="text-center">
    <div class="card shadow-sm">
      <img
        :src="urls(hotplace)"
        width="70%"
        height="200"
        class="bd-placeholder-img card-img-top"
        :alt="hotplace.title"
      />
    </div>
    <th scope="row">{{ hotplace.hotplaceNo }}</th>
    <td class="text-start">
      <router-link
        :to="{
          name: 'hotplace-view',
          params: { hotplaceno: hotplace.hotplaceNo },
        }"
        class="hotplace-title link-dark"
      >
        {{ hotplace.title }}
      </router-link>
    </td>
    <td>{{ hotplace.userId }}</td>
    <td>{{ hotplace.address }}</td>
    <td>{{ hotplace.date }}</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
