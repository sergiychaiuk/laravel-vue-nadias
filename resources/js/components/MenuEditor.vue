<template>
    <div>
        <h1>Menu Editor</h1>
        <router-view></router-view>
    </div>
</template>

<script>
import VueRouter from 'vue-router';
import CategoryManager from './CategoryManager';
import MenuItem from './MenuItem';

export default {
    name: "MenuEditor",
    router: new VueRouter({
        routes: [
            {
                path: '/categories',
                name: 'categories',
                component: CategoryManager,
            },
            {
                path: '/',
                redirect: { name: 'categories' },
            },
            {
                path: '/add-item',
                name: 'add-name',
                component: MenuItem,
            },
        ]
    })
}
</script>

<style scoped>

</style>
