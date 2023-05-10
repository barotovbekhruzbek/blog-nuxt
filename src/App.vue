<script setup>
import {  RouterView } from 'vue-router'
import Sidebar from "../src/components/Sidebar.vue"

</script>

<template>
<div class="sidebar-menu float-left">
  <Sidebar />
</div>

  <RouterView />
</template>

<style scoped>

</style>
