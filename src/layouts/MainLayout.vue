<template>
    <q-layout view="lHh Lpr lFf">
      <!-- Navbar -->
      <NavBarPage @toggle-drawer="leftDrawerOpen = !leftDrawerOpen" />
      
      <!-- Sidebar -->
      <SideBarPage 
        :left-drawer-open="leftDrawerOpen" 
        @update:left-drawer-open="leftDrawerOpen = $event"
      />
      
      <!-- Main Content -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  import NavBarPage from "../components/NavBarPage.vue";
  import SideBarPage from "../components/SideBarPage.vue";
  
  export default {
    components: {
      NavBarPage,
      SideBarPage,
    },
    data() {
      return {
        leftDrawerOpen: true
      }
    }
  };
  </script>