<script setup lang="ts">
import { useAuthStore } from "~/store";

const authStore = useAuthStore();
</script>
<template>
  <nav>
    <ul class="flex flex-row items-center gap-5">
      <UiNavigationLink text="Homepage" routeName="index" />
      <UiNavigationLink :text="'About'" :route-name="'about'" />
    </ul>
  </nav>
</template>
