<template>
  <v-app :theme="theme">
    <LayoutTopBar />
    <LayoutSideBar />
    <v-main>
      <main class="tw-container">
        <slot> </slot>
      </main>
    </v-main>
  </v-app>
</template>

<script setup>
const drawStore = useMenuStore();
const theme = computed(() => drawStore.theme);
</script>
