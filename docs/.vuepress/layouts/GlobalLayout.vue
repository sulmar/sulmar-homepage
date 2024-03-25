<template>
  <div :class="{ 'sidebar-open': isSidebarOpen }">
    <Navbar />
    <Sidebar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@theme/Navbar.vue';
import Sidebar from '@theme/Sidebar.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

onMounted(() => {
    const button = document.querySelector('.toggle-sidebar-button');
    if (button) {
        button.addEventListener('click', toggleSidebar);
    }

    document.querySelectorAll('.sidebar .navbar-item .route-link').forEach(item => {
        item.addEventListener('click', toggleSidebar);
    });
});

onBeforeUnmount(() => {
    const button = document.querySelector('.toggle-sidebar-button');
    if (button) {
        button.removeEventListener('click', toggleSidebar);
    }

    document.querySelectorAll('.sidebar .navbar-item .route-link').forEach(item => {
        item.removeEventListener('click', toggleSidebar);
    });
});

</script>