<template>
    <form>
        <div v-for="(category, index) in categories" :key="category.id">
            <input type="text" v-model="category.name">
            <a @click="removeCategory(index)" class="remove">delete</a>
            <div>
                <img :src="`/images/${category.image}`" alt="">
                <input type="text" v-model="category.image">
            </div>
            <hr>
        </div>
    </form>
</template>

<script>
export default {
    name: "CategoryManager",
    props: ['initialCategories'],
    data: function () {
        return {
            categories: _.cloneDeep(this.initialCategories),
        };
    },
    methods: {
        removeCategory: function (index) {
            if (confirm('Are you sure?')) {
                this.categories.splice(index, 1);
            }
        },
    }
}
</script>

<style scoped>
    img {
        vertical-align: middle;
    }
    hr {
        margin-bottom: 30px;
    }
</style>
