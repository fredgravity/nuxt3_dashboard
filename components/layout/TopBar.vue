<template>
  <v-app-bar class="tw-px-3">
    <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>

    <v-btn :prepend-icon="theme === 'light' ? 'mdi:mdi-weather-sunny' : 'mdi:mdi-weather-night'" @click="onClick"></v-btn>

    <p class="tw-w-full md:tw-text-right tw-text-green-500">MyApp</p>

    <template class="tw-flex tw-pr-3 tw-w-full tw-items-center tw-justify-end tw-gap-6">
      <v-menu class="tw-cursor-pointer">
        <template v-slot:activator="{ props }">
          <v-icon color="blue-darken-2" v-bind="props">mdi:mdi-message-reply-text-outline</v-icon>
          <!-- <v-tooltip activator="parent" location="bottom">Messages</v-tooltip> -->
        </template>
        <v-list :items="notifies" item-props lines="two" class="tw-cursor-pointer">
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle" class="tw-cursor-pointer"></div>
          </template>
        </v-list>
      </v-menu>

      <v-menu class="tw-cursor-pointer">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props">mdi:mdi-bell-ring-outline</v-icon>
          <!-- <v-tooltip activator="parent" location="bottom">Notification</v-tooltip> -->
        </template>
        <v-list lines="two">
          <v-list-item v-for="folder in folders" :key="folder.title" :title="folder.title" :subtitle="folder.subtitle" class="tw-w-72 tw-cursor-pointer hover:tw-bg-slate-100">
            <template v-slot:prepend>
              <v-avatar color="red-lighten-1">
                <v-icon color="white">mdi:mdi-information</v-icon>
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu>
        <template v-slot:activator="{ props }">
          <img src="https://randomuser.me/api/portraits/women/85.jpg" class="tw-cursor-pointer tw-rounded-full tw-w-10 tw-h-10 tw-bg-slate-500" alt="" v-bind="props" />
        </template>

        <v-list class="tw-w-full">
          <template v-for="(item, i) in items" :key="i" class="tw-text-sm">
            <v-list-item class="tw-cursor-pointer hover:tw-bg-slate-100"
              ><v-icon class="tw-mr-3 tw-text-sm">{{ item.icon }}</v-icon
              >{{ item.title }}</v-list-item
            >
          </template>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
const drawStore = useMenuStore();
const theme = computed(() => drawStore.theme);

const onClick = () => {
  drawStore.changeTheme();
};

const drawer = () => {
  drawStore.openMenu();
};
const items = ref([
  { title: "My Profile", icon: "fas fa-regular fa-user" },
  { title: "Settings", icon: "fas fa-regular fa-gear" },
  // { title: "", icon: "" },
  { title: "Logout", icon: "fas fa-solid fa-arrow-right-from-bracket" },
]);
const notifies = ref([
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },

  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "Summer BBQ",
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },

  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },

  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },

  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]);
const folders = ref([
  {
    subtitle: "Jan 9, 2014",
    title: "Photos",
  },
  {
    subtitle: "Jan 17, 2014",
    title: "Recipes",
  },
  {
    subtitle: "Jan 28, 2014",
    title: "Work",
  },
]);
</script>

<style></style>
