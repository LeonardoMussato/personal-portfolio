<script setup lang="ts"></script>
<template>
  <nav>
    <ul class="flex flex-row items-center gap-5">
      <UiNavigationLink text="Homepage" routeName="index" />
      <UiNavigationLink :text="'About'" :route-name="'about'" />
    </ul>
  </nav>
</template>
