<template>
    <form>
        <a @click="addCategory">+ Add Category</a>
        <div v-for="(category, index) in categories" :key="category.id">
            <input type="text" v-model="category.name" :ref="category.name">
            <a @click="removeCategory(index)" class="remove">delete</a>
            <div>
                <img v-if="category.image" :src="`/images/${category.image}`" alt="">
                <label v-else>Image: </label>
                <input type="text" v-model.lazy="category.image">
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
    created: function () {
        axios.post('/api/categories/upsert');
    },
    methods: {
        addCategory: function () {
            this.categories.push({
                id: 0,
                name: '',
                image: '',
                display_order: this.categories.length + 1,
            });

            this.$nextTick(() => {
                window.scrollTo(0, document.body.scrollHeight);
                this.$refs[''][0].focus();
            });
        },
        removeCategory: function (index) {
            if (confirm('Are you sure?')) {
                this.categories.splice(index, 1);
            }
        },
    },
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
