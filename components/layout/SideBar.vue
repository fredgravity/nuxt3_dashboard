<template>
  <v-card class="mx-auto" width="256" tile>
    <v-navigation-drawer v-model="opened" expand-on-hover rail>
      <!-- <div class="tw-w-full tw-text-end tw-px-4 tw-cursor-pointer" @click="close">
          <v-icon> fas fa-solid fa-xmark</v-icon>
        </div> -->
      <v-divider class="tw-mb-5"></v-divider>
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams" subtitle="sandra_a88@gmailcom"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item v-for="([title, icon], i) in menus" :key="i" :title="title" :prepend-icon="icon" :value="title" class="tw-bg-black" rounded="shaped"></v-list-item>
        <v-list-item v-model:opened="open" prepend-icon="fas fa-solid fa-archway" rounded="shaped">
          <v-list-group value="Admin">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Administration" rounded="shaped"></v-list-item>
            </template>

            <v-list-item v-for="([title], i) in admins" :key="i" :title="title" :value="title" class="tw-w-full" rounded="shaped"></v-list-item>
          </v-list-group>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup>
const drawStore = useMenuStore();
const opened = computed(() => drawStore.drawer);
const close = () => {
  drawStore.openMenu();
};

const open = ref(["Users"]);
const menus = ref([
  ["My Files", "mdi:mdi-folder"],
  ["Shared with me", "mdi:mdi-account-multiple"],
  ["Starred", "mdi:mdi-star"],
]);
const admins = ref([
  ["Management", "mdi:mdi-account-multiple-outline"],
  ["Settings", "mdi:mdi-cog-outline"],
]);
</script>

<style></style>
