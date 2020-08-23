<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <div id="search">
            <input type="search" name="search-box" placeholder="Search blog" v-model="search" v-on:submit.prevent="findBlog">
        </div>
        <div v-for="(blog,key) in findBlog" class="single-blog" :key=key>
            <router-link v-bind:to="'/blog/' + blog.id" >
                <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            </router-link>
            <article>{{ blog.body | to-concat}}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/search'
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    },
    filters: {
        'to-uppercase': function (value) {
              return value.toUpperCase()
        },
        toConcat(value){
            return value.slice(0,90) + '...'
        }
    },
    directives: {
        rainbow: {
            bind(el,binding,vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2, 8);
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
#search input {
    width: 100%;
    text-align: center;
}
</style>