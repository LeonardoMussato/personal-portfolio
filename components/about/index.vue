<script setup lang="ts"></script>
<template>
  <div class="flex flex-col w-full items-center transition-colors duration-300">
    <div class="flex flex-col md:flex-row gap-10 items-center">
      <div class="relative w-60 h-60">
        <UiCard :needs-padding="false" class="absolute top-0 left-0">
          <img
            src="@/assets/profile.png"
            alt="profile"
            class="aspect-square w-52 h-52 object-cover object-center"
          />
        </UiCard>

        <UiCard :needs-padding="false" class="absolute top-5 left-5">
          <img
            src="@/assets/profile.png"
            alt="profile"
            class="aspect-square w-52 h-52 object-cover object-center"
          />
        </UiCard>
      </div>

      <div class="flex-1 w-full text-center md:text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi possimus
        repellat suscipit labore illo est officia, doloremque distinctio dolor
        recusandae dicta animi maxime maiores! Eos vitae debitis minus
        necessitatibus dolores!
      </div>
    </div>
  </div>
</template>
